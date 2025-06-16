import { useState, useRef } from "react";

function AccordionToggle({ title, desc }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    return <div className="accordion accordion--text">
        <button
            className="accordion__title accordion--text"
            onClick={() => setIsOpen((prev) => !prev)}
        >
            <div className="accordion__title-container">
                <span className="accordion__header">{title}</span>
                <span className="accordion__title-sign">{isOpen ? "-" : "+"}</span>
            </div>

        </button>

        <div
            ref={contentRef}
            className={`accordion__content accordion--text ${isOpen ? "open" : ""}`}
            style={
                isOpen
                    ? { maxHeight: contentRef.current ?.scrollHeight + "px" }
                    : { maxHeight: 0 }
            }
        >
            <p>{desc}</p>
        </div>
    </div>
}

export default AccordionToggle;