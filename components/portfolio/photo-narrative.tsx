import Image from "next/image";

const poses = [
  {
    key: "neutral",
    src: "/images/avatar/sahil-neutral.webp",
  },
  {
    key: "product",
    src: "/images/avatar/sahil-product.webp",
  },
  {
    key: "infrastructure",
    src: "/images/avatar/sahil-infrastructure.webp",
  },
] as const;

export function PhotoNarrative() {
  return (
    <div className="photo-narrative" aria-hidden="true">
      <div className="photo-narrative__orbit" />

      <div
        className="narrative-layer narrative-layer--product"
        data-narrative-layer="product"
      >
        <div className="product-panel product-panel--primary" data-product-element>
          <span>Product / Interface</span>
          <i />
          <i />
          <i />
        </div>
        <div className="product-panel product-panel--secondary" data-product-element>
          <span>Workflow / Data</span>
          <i />
          <i />
        </div>
        <div className="product-signal" data-product-element>
          <span>01</span>
          <span>Designed as one system</span>
        </div>
      </div>

      <div
        className="narrative-layer narrative-layer--infrastructure"
        data-narrative-layer="infrastructure"
      >
        <div className="architecture-path architecture-path--one" />
        <div className="architecture-path architecture-path--two" />
        <span className="architecture-node architecture-node--entry" data-infrastructure-element>
          Request
        </span>
        <span className="architecture-node architecture-node--orchestrate" data-infrastructure-element>
          Orchestrate
        </span>
        <span className="architecture-node architecture-node--queue" data-infrastructure-element>
          Queue
        </span>
        <span className="architecture-node architecture-node--deliver" data-infrastructure-element>
          Deliver
        </span>
      </div>

      <div className="photo-narrative__poses">
        {poses.map((pose, index) => (
          <div
            className={`photo-narrative__pose photo-narrative__pose--${pose.key}`}
            data-avatar-pose={pose.key}
            key={pose.key}
          >
            <Image
              alt=""
              draggable={false}
              height={1881}
              priority={index === 0}
              sizes="(max-width: 780px) 92vw, (max-width: 1100px) 42vw, 38vw"
              src={pose.src}
              width={836}
            />
          </div>
        ))}
      </div>

      <div className="photo-narrative__rail">
        <span>01</span>
        <i data-narrative-progress />
        <span>03</span>
      </div>
    </div>
  );
}
