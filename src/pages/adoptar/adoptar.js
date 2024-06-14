/*import Data from '../data/adoptar.json'
import './adoptar.css'

const Adoptar = () => {
    state = {
        
        lastUpdate=6,
        incremet = 2,
        initialData = Data.slice(0, 6),

    }


    const loadMoreData = () => {
        const { lastUpdate, incremet} = this.state;
        const newData = Data.slice( lastUpdate, lastUpdate + incremet);
        initialData = [...initialData, ...newData];
        console.log(initialData);
        lastUpdate += incremet;
        this.setState({ newData, incremet, lastUpdate}) //

    }

    const handleScroll = (e) => {
        loadMoreData();
    }

    window.addEventListener('scrollend', handleScroll, {passive: true});
}

      
export default adoptar;
*/