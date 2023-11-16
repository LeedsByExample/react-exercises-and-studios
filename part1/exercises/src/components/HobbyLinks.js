

function HobbyLinks() {
    const hobbyLinks = [
        'https://www.wikihow.com/Play-the-Piano',
        'https://momyco.org/'
    ];
    return (
        <div>
            <h4>My Hobbies</h4>
                <ul>
                    <li><a href={hobbyLinks[0]}>Learn To Play The Piano</a></li>
                    <li><a href={hobbyLinks[1]}>Forage For Mushrooms In Missouri</a></li>
                </ul>
        </div>
    );
}


export default HobbyLinks;