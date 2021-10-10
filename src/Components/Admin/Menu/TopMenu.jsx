import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }
  


export const TopMenu = ({header}) => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const finalSpaceCharacters = [
    {
      id: "HOME",
      name: "HOME",
    },
    {
      id: "NBA",
      name: "NBA",
    },
    {
      id: "NFL",
      name: "NFL",
    },
    {
      id: "MBL",
      name: "MBL",
    },
    {
      id: "NHL",
      name: "NHL",
    },
    {
      id: "CBB",
      name: "CBB",
    },
    {
      id: "CFB",
      name: "CFB",
    },
    {
      id: "NASCAR",
      name: "NASCAR",
    },
    {
      id: "GOLF",
      name: "GOLF",
    },
    {
      id: "VIDEO",
      name: "VIDEO",
    },
    {
      id: "LIFESTYLE",
      name: "LIFESTYLE",
    },
    {
      id: "DEALBOOK",
      name: "DEALBOOK",
    },
  ];

  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    console.log(result);
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
  }

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    boxShadow: isDragging ? "0 0 10px rgba(0,0,0,0.3)" : "",
    padding: "15px 15px",
    color: isDragging ? "#b10000" : "rgb(199, 199, 199)",
  });
  return (
    <div class="top-menu">
      {/* <Slider className="SliderStyle" {...settings}> */}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable direction="horizontal" droppableId="characters">
          {(provided, snapshot) => (
            <ul
              {...provided.droppableProps}
              className="characters draggableList"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.map(({ id, name }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                      <li
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          {name}
                        </p>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      {/* </Slider> */}
    </div>
  );
};
