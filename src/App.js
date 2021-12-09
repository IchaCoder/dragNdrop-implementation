import React, {useState} from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

function App() {
  const [list, setList] = useState([
    {name: 'Learn js', id: 'dkjfkdjfk'},
    {name: 'go to school', id: 'djkfjdkfjd'},
    {name: 'go to hospital', id: 'kjrjfi'},
    {name: 'go to church', id: 'lkdjji'},
  ]);

  return <div className="container">
    <DragDropContext onDragEnd={(e) => {
      const sourceIndex = e.source.index
      const destIndex = e.destination.index
      list.splice(destIndex,0, list.splice(sourceIndex,1)[0])
    }
    }>
      <h2>Todo</h2>
      <Droppable droppableId="droppable-1">
        {(provided,snapshot) => (
          <div className='wrapper' 
          ref={provided.innerRef}
          {...provided.droppableProps}
          >
            {list.map((item, index)=> { 
              const {name,id} = item;
                return (
                  <Draggable key={id} draggableId={'draggable-' + id} index={index}>
                    {(provided,snapshot) => (
                      <p  className='body'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      >{name}</p>
                    )}
                  </Draggable>
                ) 
            })}
            {provided.placeholder}
          </div>

        )}
      </Droppable>
    </DragDropContext>
  </div>
}

export default App;
