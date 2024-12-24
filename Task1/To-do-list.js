const taskInput=document.getElementById('task-input');
const addButton=document.getElementById('add-button');
const taskList=document.getElementById('task-list');
addButton.addEventListener('click',addTask);
function addTask(){
  const taskText=taskInput.value.trim();
  if (taskText===''){
    alert('Please enter a task!');
  }
  const taskItem=document.createElement('div');
      taskItem.classList.add('task-item');
      const taskContent=document.createElement('h4');
      taskContent.textContent=taskText;
      taskContent.style.margin="0"; 
      taskItem.appendChild(taskContent);
      const deleteButton=document.createElement('button');
      deleteButton.textContent='🗑️';
      deleteButton.classList.add('delete-button');
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
      });
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
      taskInput.value='';
}
