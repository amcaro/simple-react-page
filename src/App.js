import hacksaw from './content/hacksaw.webp';
import frames from './content/frames.webp';
import finnish from './content/finnish.jpeg';
import './App.css';
import Banner from './components/banner/Banner';
import SubBanner from './components/SubBanner/SubBanner';
import Article from './components/Article/Article';

function App() {

  return (
    <main className="App">
      <header className="App-header">
        <Banner />
      </header>
      <section>
        <SubBanner text="Brushes" className="sub-banner teal"/>
        <Article
          src={hacksaw}
          title="Hacksaw Brushes"
          text="Made of the highest quality oak, Hacksaw brushes are known for their weight and ability to hold paint in large amounts. Available in different sizes. <span>Starting at $3.00 / brush.</span>"
        />
      </section>
      <section>
        <SubBanner text="Frames" className="sub-banner red"/>
        <Article 
          src={frames}
          title="Art Frames (assorted)"
          text="Assorted frames made of different material, including MDF, birchwood, and PDE. Select frames can be sanded and painted according to your needs. <span>Starting at $2.00 / frame.</span>"
        />
      </section>
      <section>
        <SubBanner text="Paint" className="sub-banner blue"/>
        <Article
          src={finnish} 
          title="Clean Finnish Paint"
          text="Imported paint from Finland. Over 256 colors available in-store, varying in quantity (1 oz. to 8 oz.). Clean Finnish paint microbinds to canvas, increasing the finish and longevity of any artwork. <span>Starting at $5.00 / tube.</span>"
        />
      </section>
    </main>
  );
}

export default App;
