import style from "@/styles/experiences.module.scss";

export const Experience: React.FC = (): JSX.Element => {
  return (
    <section id={"experience"} className={"flex flex-col items-center px-4"}>
      <div className={`${style.headerTitle} text-center mb-4`}>
        <h2 className="text-2xl font-semibold text-gray-800">My experiences</h2>
        <p className="text-sm text-gray-600">A few of my experiences as professional and student</p>
      </div>
      <div className="w-full sm:w-3/4">
        <ul className={`${style.timeline} ${style.timelineCentered}`}>
          <li className={style.timelineItem}>
            <div className={`${style.timelineInfo} text-gray-600`}>
              <span>February 12, 2022</span>
            </div>
            <div className={style.timelineMarker}></div>
            <div className={style.timelineContent}>
              <h3 className={`${style.timelineTitle} text-lg font-semibold text-gray-600`}>Event Title</h3>
              <p className="text-gray-600">
                Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a,
                consectetuer eget, posuere ut, mauris. Donec orci lectus,
                aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien
                ut libero venenatis faucibus. ullam dictum felis eu pede mollis
                pretium. Pellentesque ut neque.
              </p>
            </div>
          </li>
          <li className={style.timelineItem}>
            <div className={`${style.timelineInfo} text-gray-600`}>
              <span>February 23, 2022</span>
            </div>
            <div className={style.timelineMarker}></div>
            <div className={style.timelineContent}>
              <h3 className={`${style.timelineTitle} text-lg font-semibold text-gray-600`}>Event Title</h3>
              <p className="text-gray-600">
                Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a,
                consectetuer eget, posuere ut, mauris. Donec orci lectus,
                aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien
                ut libero venenatis faucibus. ullam dictum felis eu pede mollis
                pretium. Pellentesque ut neque.
              </p>
            </div>
          </li>
          <li className={`${style.timelineItem} ${style.period}`}>
            <div className={style.timelineInfo}></div>
            <div className={style.timelineMarker}></div>
            <div className={style.timelineContent}>
              <h2 className={`${style.timelineTitle} text-2xl font-bold text-gray-600`}>March 2022</h2>
            </div>
          </li>
          <li className={style.timelineItem}>
            <div className={`${style.timelineInfo} text-gray-600`}>
              <span>March 02, 2022</span>
            </div>
            <div className={style.timelineMarker}></div>
            <div className={style.timelineContent}>
              <h3 className={`${style.timelineTitle} text-lg font-semibold text-gray-600`}>Event Title</h3>
              <p className="text-gray-600">
                Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a,
                consectetuer eget, posuere ut, mauris. Donec orci lectus,
                aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien
                ut libero venenatis faucibus. ullam dictum felis eu pede mollis
                pretium. Pellentesque ut neque.
              </p>
            </div>
          </li>
          <li className={style.timelineItem}>
            <div className={`${style.timelineInfo} text-gray-600`}>
              <span>March 28, 2022</span>
            </div>
            <div className={style.timelineMarker}></div>
            <div className={style.timelineContent}>
              <h3 className={`${style.timelineTitle} text-lg font-semibold text-gray-600`}>Event Title</h3>
              <p className="text-gray-600">
                Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a,
                consectetuer eget, posuere ut, mauris. Donec orci lectus,
                aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien
                ut libero venenatis faucibus. ullam dictum felis eu pede mollis
                pretium. Pellentesque ut neque.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};