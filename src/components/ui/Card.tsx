interface props {
  review: string;
  author: string;
  img: string;
}
function Card({review, author, img}: props) {
  return (
    <div className="h-[600px] w-[350px] px-8 py-4 rounded-2xl flex flex-col justify-end text-white relative overflow-hidden">
      <img
        src={img}
        className="absolute top-0 left-0 h-full w-full object-cover -z-20 "
      />
      {/* Gradient overlay */}
      <div
        className="absolute top-0 left-0 h-full w-full -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,rgba(255, 255, 255, 0.2) 0% , rgba(0, 0, 0, 0.911) 95%, rgba(0, 0, 0, 0.911) 100%)",
        }}
      />
      <p className="text-lg font-bold relative z-10">
        {review}
      </p>
      <span className="text-xs relative z-10">
        {author}
      </span>
    </div>
  );
}

export default Card;
