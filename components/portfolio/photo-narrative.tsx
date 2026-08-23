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
        <div className="narrative-kicker" data-product-element>
          <span>Product blueprint</span>
          <strong>One system</strong>
        </div>
        <div className="product-blueprint">
          <div className="product-layer" data-product-element>
            <span>01</span>
            <div>
              <strong>Interface</strong>
              <small>Next.js experience</small>
            </div>
            <em>User</em>
          </div>
          <div className="product-layer" data-product-element>
            <span>02</span>
            <div>
              <strong>Services</strong>
              <small>Node.js APIs</small>
            </div>
            <em>Logic</em>
          </div>
          <div className="product-layer" data-product-element>
            <span>03</span>
            <div>
              <strong>Data</strong>
              <small>State + integrations</small>
            </div>
            <em>Scale</em>
          </div>
        </div>
        <div className="narrative-proof" data-product-element>
          <i />
          <span>One release path across every layer</span>
        </div>
      </div>

      <div
        className="narrative-layer narrative-layer--infrastructure"
        data-narrative-layer="infrastructure"
      >
        <div className="narrative-kicker" data-infrastructure-element>
          <span>Production path</span>
          <strong>GCP delivery</strong>
        </div>
        <div className="delivery-map">
          <i className="delivery-map__line" />
          <div className="delivery-step" data-infrastructure-element>
            <span>01</span>
            <div><strong>Request</strong><small>Edge + API</small></div>
          </div>
          <div className="delivery-step" data-infrastructure-element>
            <span>02</span>
            <div><strong>Queue</strong><small>Cloud Tasks</small></div>
          </div>
          <div className="delivery-step" data-infrastructure-element>
            <span>03</span>
            <div><strong>Worker</strong><small>Node services</small></div>
          </div>
          <div className="delivery-step" data-infrastructure-element>
            <span>04</span>
            <div><strong>Observe</strong><small>Logs + metrics</small></div>
          </div>
        </div>
        <div className="narrative-proof" data-infrastructure-element>
          <i />
          <span>Observed · retried · scaled</span>
        </div>
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
              unoptimized
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
