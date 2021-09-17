import React from 'react';

function Section({ image, title, paragraphs }) {
    if (image) {
        return (
            <section>
                <img src={image} alt="Fills some blank space" />
            </section>
        );
    } else {
        return (
            <section>
                <h2>{title}</h2>
                {paragraphs.map((paragraph) => {
                    return <p>{paragraph}</p>;
                })}
            </section>
        );
    }
}
export default Section;