import { useRef, useState } from 'react';
import BodyIsBible from '../assets/audio/Her Body Is Bible.mp3';
import Becky from "../assets/audio/Becky's So Hot.mp3";
import HeartBreaker from "../assets/audio/Serial Heartbreaker.mp3";
import Lied from "../assets/audio/Guess We Lied.mp3";

import './musicplayer.css'

export default function MusicPlayer(){

    var songsRef = useRef([BodyIsBible, Becky, HeartBreaker, Lied]);
    const [currentlyPlaying, setCurrentlyPlaying] = useState(songsRef.current[0])

    const ref = useRef(null)

    const [play, setPlay] = useState(false)

    function playNext() {
        let nowPlaying = songsRef.current[0];
        songsRef.current.shift()
        setCurrentlyPlaying(songsRef.current[0])
        songsRef.current.push(nowPlaying)
    }


    const handleClick = () => {
        setPlay(!play)

        if(!play) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }
    return (
        
        <div className="player" onClick={() => handleClick()}>
            <p style={{margin:"0"}}>Currently on Repeat</p>
            <span className={play ? 'playing' : 'playing paused'}/>
            <span className={play ? 'playing' : 'playing paused'}/>
            <span className={play ? 'playing' : 'playing paused'}/>
            <span className={play ? 'playing' : 'playing paused'}/>
            <span className={play ? 'playing' : 'playing paused'}/>
            <audio src={currentlyPlaying} ref={ref} autoPlay onEnded={playNext}/>
        </div>
     
    )
}