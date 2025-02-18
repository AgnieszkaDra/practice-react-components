import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comments: [],
        content: ''
    }

    submit = (e) =>{
        e.preventDefault()
        console.log(e)
        const {content} = this.state;
        if(content.length > 0){
            this.addComment(content);
            this.setState({
                content: '',
            })
        }
    }
    addComment(comment){
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }

    contentChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }

    renderComments(){
        const {comments} = this.state;
        return comments.map(comment => {
            return (
                <li>{comment}</li>
            )
        })
    }
    
    render() {
        const {title, body} = this.props;
        const {content} = this.state;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={this.submit}>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" value={content} onChange={this.contentChange}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {this.renderComments()}
                        {/* tutaj komentarze jako <li/>, ps. tak wygląda komentarz do kodu w JSX */}
                    </ul>
                </section>
            </article>
        )
    }
}

root.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
