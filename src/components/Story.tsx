import { MdStar } from "react-icons/md";
import Card from "./ui/Card";
import { useState } from "react";
import PrimaryButton from "./ui/PrimaryButton";
const reviews = [
  {
    id: 1,
    name: "Priya",
    img: "https://webneel.com/daily/sites/default/files/images/daily/05-2018/portrait-photography-by-dennis-drozhzhin.jpg",
    review:
      "This site looks incredibly clean and works seamlessly on mobile. Navigation is intuitive, and the loading speed is impressive. You can tell the developer paid attention to every detail.",
    author: "Priya Sharma, UX Designer, Mumbai",
  },
  {
    id: 2,
    name: "Anil",
    img: "https://www.cathysummers.com/images/20180525_035.jpg",
    review:
      "After using this portfolio as inspiration, I got feedback that my resume and project layout looked very professional. I landed my first freelance job within a month. Totally recommend this format!",
    author: "Anil Mehta, Frontend Developer, Delhi",
  },
  {
    id: 3,
    name: "Radhika",
    img: "https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es=",
    review:
      "The project descriptions are short but effective, and the GitHub links were easy to follow. I especially liked the ‘Mapty’ app and how it explains the logic behind the scenes. It's rare to see this kind of clarity in beginner portfolios.",
    author: "Radhika Iyer, Software Mentor, Bangalore",
  },
];

function Story() {
  const [selectedCard, setSelectedCard] = useState(1);
  return (
    <div className="px-32 grid grid-cols-2 h-screen items-center">
      <div className="w-[350px]">
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

        <div className="flex gap-4 items-center my-8 justify-evenly">
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
      <div className="flex flex-col gap-3 items-start">
        <h2 className="text-8xl font-bold">Find out why we're better</h2>
        <PrimaryButton type="lessRounded">
          See all our stories
        </PrimaryButton>
        <div className="flex gap-1 items-center py-2">
          <MdStar className="h-5 w-5" />
          <span className="font-bold">Trustpilot Excellent 4.4</span> out of 5
        </div>
      </div>
    </div>
  );
}

export default Story;
