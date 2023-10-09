import Image from "next/image";

interface Item {
  id: number;
  title: string;
  description: string;
  src: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "Fully Responsive Design",
    description:
      "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    src: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg",
  },
  {
    id: 2,
    title: "Library Updated",
    description:
      "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    src: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg",
  },
  {
    id: 3,
    title: "Easy to Use & Customize",
    description:
      "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    src: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg",
  },
];

function ItemComponent({
  title,
  description,
  src,
  index,
}: Item & { index: number }) {
  return (
    <div
      className={`lg:flex ${
        index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Photo */}
      <div className="flex-1">
        <Image
          src={src}
          alt="photo"
          width={756}
          height={480}
          className="w-full h-[400px] object-cover lg:h-auto"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-center items-center px-12 h-[400px] lg:h-full">
          <div className="flex flex-col gap-4 max-w-xl">
            {/* Title */}
            <h3 className="font-bold text-2xl">{title}</h3>

            {/* Description */}
            <span className="text-xl">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const Showcase = () => {
  return (
    <section className="bg-white">
      {items.map((item, index) => (
        <ItemComponent key={item.id} {...item} index={index} />
      ))}
    </section>
  );
};

export default Showcase;
