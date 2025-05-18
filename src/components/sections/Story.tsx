import { MdStar } from "react-icons/md";
import { useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";
import Card from "../ui/Card";
import reviews from '../../data/reviews.json'

function Story() {
  const [selectedCard, setSelectedCard] = useState(1);
  return (
    <section className="md:px-32 px-4 flex gap-8  flex-col-reverse md:flex-row min-h-screen items-center relative py-12">
      <div className="w-[21.875rem] flex-1 flex md:flex-col flex-col-reverse gap-8 ">
        <div>
          {reviews.map(
            (card) =>
              selectedCard === card.id && (
                <Card
                  key={card.id}
                  img={card.img}
                  review={card.review}
                  author={card.author}
                />
              )
          )}
        </div>

        <div className=" w-[21.875rem] flex gap-4 items-center justify-evenly">
          {reviews.map((card) => (
            <button
              key={card.id}
              className={`text-xl hover:text-green-800 hover:ring ring-green-700 rounded-full p-2 min-w-20 ${
                selectedCard === card.id ? "ring text-green-800" : ""
              }`}
              onClick={() => setSelectedCard(card.id)}
            >
              {card.name}
            </button>
          ))}
        </div>
      </div>
      {/* story heading */}
      <div className="flex flex-col gap-8 md:items-start  flex-1">
        <h2 className="md:text-8xl text-5xl font-bold">Find out why we're better</h2>
        <PrimaryButton type="lessRounded">
          See all our stories
        </PrimaryButton>
        <div className="flex gap-1 items-center justify-center md:justify-start py-2">
          <MdStar className="h-5 w-5" />
          <span className="font-bold">Trustpilot Excellent 4.4</span> out of 5
        </div>
      </div>
    </section>
  );
}

export default Story;
