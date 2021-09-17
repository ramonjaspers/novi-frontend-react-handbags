// Import react module and components
import React from 'react';
import Button from './components/Button';
import Product from './components/Product';
import Section from './components/Section';
// Import assets
import './App.css';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';

function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button link='#' text='To the collection' />
        <Button link='#' text='Shop all bags' />
        <Button link='#' text='Pre-orders' isDisabled={true}/>
      </nav>
      <main>
        <Product highlight='Bestseller' image={bag_1} title='The handy bag' price='400,-' />
        <Product highlight='Bestseller' image={bag_2} title='The stylish bag' price='250,-' />
        <Product highlight='New collection' image={bag_3} title='The simple bag' price='300,-' />
        <Product highlight='New collection' image={bag_4} title='The trendy bag' price='150,-' />
      </main>
      <footer>
        <Section title='The brand' paragraphs={['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ut repellendus ab optio voluptas modi', 'ASDVsadvsdVADv sdvs advas dva dvs va vs dv sdvsdvasdv avfav afvaf a']} />
        <Section image={brand} />
        <Section image={our_story} />
        <Section title='OUR STORY' paragraphs={['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ut repellendus ab optio voluptas modi', 'ASDVsadvsdVADv sdvs advas dva dvs va vs dv sdvsdvasdv avfav afvaf a']} />

      </footer>
    </>
  );
}

export default App;



