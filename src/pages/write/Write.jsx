import './write.css'

export default function Write() {
    return (
        <div className = 'write'>
            <img className = 'writeImage' src = 'https://d.newsweek.com/en/full/998670/food-dinner-healthy-friends-stock.jpg'>
                
            </img>
            <form className = 'writeForm'>
                <div className = 'writeFormGroup'>
                    <label htmlFor = 'fileInput'>
                    <i class="writeIcon far fa-plus-square"></i>
                    </label>
                    <input type = 'file' id = 'fileInput' style ={{display:'none'}}/>
                    <input type = 'text' placeholder = 'Title' className = 'writeInput' autoFocus = {true}/>
                </div>
                <div className = 'writeFormGroup'>
                    <textarea placeholder = 'Share your cooking...' type = 'text' className = 'writeInput writeText'></textarea>
                </div>
                <button className = 'writeSubmit'>
                    Publish
                </button>
            </form>
        </div>
    )
}
