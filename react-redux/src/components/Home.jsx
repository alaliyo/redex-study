import { useState } from "react";

function Home() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
    }

    return(
        <div>
            <h1>TO DO</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>작성</button>
            </form>
        </div>
    );
}

export default Home;