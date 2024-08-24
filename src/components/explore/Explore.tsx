import Accordion from "../utility/Accordion/Accordion";
import "./Explore.css";
const ACCORDION_LIST = [
  {
    id: "asd123",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus, libero voluptatibus commodi blanditiis optio est repellendus laborum sit molestiae amet a distinctio. Voluptatum iusto pariatur dignissimos corporis possimus repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus, libero voluptatibus commodi blanditiis optio est repellendus laborum sit molestiae amet a distinctio. Voluptatum iusto pariatur dignissimos corporis possimus repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus, libero voluptatibus commodi blanditiis optio est repellendus laborum sit molestiae amet a distinctio. Voluptatum iusto pariatur dignissimos corporis possimus repellendus.",
  },
  {
    id: "asa123",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus, libero voluptatibus commodi blanditiis optio est repellendus laborum sit molestiae amet a distinctio. Voluptatum iusto pariatur dignissimos corporis possimus repellendus.",
  },
  {
    id: "asf123",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus, libero voluptatibus commodi blanditiis optio est repellendus laborum sit molestiae amet a distinctio. Voluptatum iusto pariatur dignissimos corporis possimus repellendus.",
  },
  {
    id: "asg123",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus, libero voluptatibus commodi blanditiis optio est repellendus laborum sit molestiae amet a distinctio. Voluptatum iusto pariatur dignissimos corporis possimus repellendus.",
  },
  {
    id: "ash123",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus, libero voluptatibus commodi blanditiis optio est repellendus laborum sit molestiae amet a distinctio. Voluptatum iusto pariatur dignissimos corporis possimus repellendus.",
  },
];

export default function Explore() {
  return (
    <section className="explore">
      <div className="explore-container">
        <h1 className="explore-head">Explore options near me</h1>
        {ACCORDION_LIST.map((item) => (
          <Accordion key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
