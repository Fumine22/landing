import Image from "next/image";

interface Feedback {
  id: number;
  avatar: string;
  name: string;
  feedback: string;
}

const counters: Feedback[] = [
  {
    id: 1,
    avatar:
      "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
    name: "Margaret E.",
    feedback: "This is fantastic! Thanks so much guys!",
  },
  {
    id: 2,
    avatar:
      "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
    name: "Fred S.",
    feedback:
      "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
  },
  {
    id: 3,
    avatar:
      "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
    name: "Sarah W.",
    feedback: "Thanks so much for making these free resources available to us!",
  },
];

function FeedbackList({ avatar, name, feedback }: Feedback) {
  return (
    <div className="flex flex-col items-center gap-4 px-3 flex-1 max-w-sm">
      {/* Avatar */}
      <Image
        src={avatar}
        alt="avatar"
        width={192}
        height={192}
        className="rounded-full shadow-avatar"
      />

      <div className="text-center space-y-2">
        {/* Name */}
        <h3 className="font-bold text-xl">{name}</h3>

        {/* Feedback */}
        <p className="text-lg">&quot;{feedback}&quot;</p>
      </div>
    </div>
  );
}

const Feedback = () => {
  return (
    <section className="bg-[#f8f9fa]">
      <div className="container">
        <div className="space-y-12 py-20">
          {/* Title */}
          <h3 className="text-center font-bold text-2xl">Feedback</h3>

          <div className="flex flex-col gap-8 lg:flex-row items-center">
            {counters.map((counter) => (
              <FeedbackList key={counter.id} {...counter} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
