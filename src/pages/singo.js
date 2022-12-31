import React, {Component} from 'react';
import './singo.css';
import axios from 'axios';

const CLIENT_ID = "94848050246e4d1e9afd600c52dba933"
const REDIRECT_URI = "http://localhost:3000/#/singo"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
  
class Singo extends Component {

    logout = () => {
        this.setState({token: ""})
        window.localStorage.removeItem("token")
    }

    searchArtists = async (e) => {
        let token = this.state.token
        let searchKey = "Ed Sheeran"
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
    
        console.log(data.artists.items)
    }

    songs = [
        "Party in the USA", "Tequila", "Dance, Dance", "Sugar, we're going down", "Stick Season", "Cotton-Eyed Joe",
        "Sexy and I know it", "Bad Guy", "Life is a highway", "Gallway Girl", "Truth hurts", "Call Me Maybe", 
        "Photograph", "Rockstar", "Bawitdaba", "Happy Birthday", "Pokemon Themesong", "Bang Bang", "It's Time",
        "Radioactive", "Demons", "Car Radio", "Blurryface", "O'Reilly Autoparts Theme", "Let It Go", "Thnks Fr Th Mmrs",
        "Hallelujah", "Party Rock Anthem", "Boys are Back in Town", "Back in Black", "We will rock you", "Red Solo Cup"
            ]
    cards = [...Array(20)]

    constructor(props) {
        super(props);

        this.state = { 
            // Initialize state values
            token: ""
        };

        const hash = window.location.hash
        let tokens = window.localStorage.getItem("token")

        if (!tokens && hash) {
            console.log(hash)
            tokens = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            console.log(tokens)
            window.location.hash = ""
            window.localStorage.setItem("token", tokens)
        }

        this.state.token = tokens
        // this.searchArtists()
        // Notation for defining functions
        this.makeSingo = this.makeSingo.bind(this);
    }

    makeSingo(num) {
        let mixedList = this.songs.sort(() => Math.random() - 0.5).slice(0,25)
        let mixedMatrix = []
        let row = []
        let count = 0
        for (const song in mixedList) {
            row.push(mixedList[song])
            count += 1
            if (count === 5) {
                mixedMatrix.push(row)
                row = []
                count = 0
            }
        }

        return (
            <table className={'Singo-board' + num}>
                <tbody>
                    {mixedMatrix.map( (row, i) => (
                        <tr key={[row,i]}>
                            {row.map( (song, j) => (
                                <td key={[song,j]}>{song}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div className='Full-wrapper'>
                <a 
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                >
                    Login to Spotify
                </a>

                <form onSubmit={this.searchArtists}>
                    <input type="text" onChange={e => console.log("idk")}/>
                    <button type={"submit"}>Search</button>
                </form>

                {this.cards.map( (num, i) => (
                    <div key={i}>
                        <h1 className='Singo-title'><u>Stripper's Singo</u></h1>

                        <div className='Top-Singo'>                 
                            {this.makeSingo(1)}
                            {this.makeSingo(2)}
                        </div>
                    </div>
                ))}
            </div>
        )
    } 
};
  
export default Singo;