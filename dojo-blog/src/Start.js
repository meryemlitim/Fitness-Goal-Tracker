import { useState, useEffect } from 'react';
import './App.css';
import './index.css';

function Start(){
// 1. Initialize todos state from localStorage
const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Handle adding a new todo
  const [data, setData] = useState({
    text: "",
    target: "",
    category:"",
    unit:"",
  });

  const handleAddTodo = (e) => {
    e.preventDefault(); // Prevent form submission

    if (data.text && data.target && data.category) {
      const newTodo = { text: data.text, target: data.target , category: data.category ,unit: data.unit };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setData({ text: "", target: "" ,category:"" ,unit:""}); // Reset input fields after submission
    }
  };

  // 3. Delete todo
  const deleteClick = (deletedIndex) => {
    const updatedTodos = todos.filter((_, index) => index !== deletedIndex);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  };

  // 4. Save todos to localStorage whenever they change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="text-center mb-6">
        {/* <h1 className="text-3xl font-bold text-blue-600">Fitness Goal Tracker</h1> */}
        {/* <p className="text-gray-600">Suivez vos objectifs de fitness quotidiens</p> */}
      </header>

      <section className="bg-white rounded-xl shadow-md p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Ajouter un Objectif</h2>
        <form onSubmit={handleAddTodo} id="goal-form" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Objectif (ex: Marcher 10 000 pas)"
            className="p-2 border rounded"
            id="goal-title"
            value={data.text}
            onChange={(e) => setData({ ...data, text: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Valeur cible (ex: 10000)"
            className="p-2 border rounded"
            id="goal-target"
            required

            value={data.target}
            onChange={(e) => setData({ ...data, target: e.target.value })}
          />
          <div className="col-span-full">
            <label className="block mb-2 font-medium text-gray-700">unit :</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="goal-unit " value="pas" className="accent-blue-500" onChange={(e) => setData({ ...data, unit  : e.target.value })}
  checked={data.unit=== "pas"} /> 
                Pas 
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="goal-unit" value="km" className="accent-blue-500" onChange={(e) => setData({ ...data,unit: e.target.value })}
  checked={data.unit=== "km"} />                              
                Km
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="goal-unit" value="litre" className="accent-blue-500" onChange={(e) => setData({ ...data,unit: e.target.value })}
  checked={data.unit=== "litre"}  />
                Litre
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="goal-unit" value="heur" className="accent-blue-500" onChange={(e) => setData({ ...data,unit: e.target.value })}
  checked={data.unit=== "heur"}  />
                heur
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="goal-unit" value="kg" className="accent-blue-500" onChange={(e) => setData({ ...data, unit: e.target.value })}
  checked={data.unit=== "kg"}  />
                kg
              </label>
            </div>
          </div>
          <div className="col-span-full">
            <label className="block mb-2 font-medium text-gray-700">Catégorie :</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="goal-type" value="steps" className="accent-blue-500" onChange={(e) => setData({ ...data, category: e.target.value })}
  checked={data.category === "steps"} />  
                Pas
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="goal-type" value="water" className="accent-blue-500" onChange={(e) => setData({ ...data, category: e.target.value })}
  checked={data.category === "water"} />
                Verres d'eau
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="goal-type" value="workout" className="accent-blue-500" onChange={(e) => setData({ ...data, category: e.target.value })}
  checked={data.category === "workout"}  />
                Séances
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="goal-type" value="sleep" className="accent-blue-500" onChange={(e) => setData({ ...data, category: e.target.value })}
  checked={data.category === "sleep"}  />
                Sommeil
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="goal-type" value="nutrition" className="accent-blue-500" onChange={(e) => setData({ ...data, category: e.target.value })}
  checked={data.category === "nutrition"}  />
                Nutrition
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded p-2 col-span-full"
          >
            Enregistrer
          </button>
        </form>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Mes Objectifs</h2>
        <div id="goal-list" className="space-y-4">
          <ul className="space-y-2">
          {todos.map((item, index) => (
  <li key={index} className="flex justify-between items-center bg-white p-4 rounded shadow">
    <span>{item.text} - {item.target} {item.unit}</span>
    <span className='cursor-pointer' onClick={() => deleteClick(index)}>❌</span>
  </li>
))}

          </ul>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Résumé des Performances</h2>
        <div id="summary" className="text-gray-700 space-y-2">
          <p><strong>Objectifs atteints cette semaine:</strong> 0</p>
          <p><strong>Progression moyenne:</strong> 0%</p>
        </div>
      </section>
    </div>
    
  );
  

}
export default Start;