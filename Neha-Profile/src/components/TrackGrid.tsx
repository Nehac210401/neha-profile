import {Link} from "react-router";
import {tracks} from "../data/tracks";
import GenericList from "../components/GenericList";


export default function TrackGrid(){
    return (
        <section>
            <h2>My Profile</h2>
            <div>
                <GenericList
                items={tracks}
                renderItem={(track) =>(
                    <Link to={track.path} className={`track-card tc-${track.id}`}>
                    <p className="track-label mono">{track.cardLabel}</p>
                    <h3>{track.cardTitle}</h3>
                    <p>{track.cardBlurb}</p>
                    </Link>
                )}
                  />  
            </div>
        </section>
    )
}