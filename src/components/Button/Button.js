import styled from 'styled-components'


export const Button = styled.button`
  height: 70px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  display: flex;
  width: ${({width}) => width};
  background: ${({theme}) => theme.colors.primary};
  border-radius: 50px;
  border: none;
  color: $${({theme}) => theme.colors.white};
  font-size: 1em;
  font-weight: 900;
  transition: box-shadow .3s ease;
  cursor: pointer;
  
  :hover {
    box-shadow: 0 10px 20px -15px red;
  }
`;

const Excuse = () => {

  const myDog = ['dog', 'cat', 'sense of ennui', 'hamster', 'chinchilla', 'iguana', 'turtle', 'best friend', 'bro', 'boo', 'crush', 'sister', 'brother', 'nemesis', 'doppelganger', 'gerbil', 'bunny', 'fish', 'crew'];
	const ate = ['ate', 'peer-reviewed', 'destroyed', 'deleted', 'erased', 'remixed', 'twitched', 'recycled', 'livetweeted', 'undermined', 'underbid', 'upcycled', 'gave away', 'plagiarised', 'confiscated', 'barfed on', 'stole', 'ransomed', 'spilled water on', 'lost', 'misplaced', 'buried', 'shredded', 'hid', 'liberated', 'left with', 'ebayed', 'craigslisted', 'etsyed', 'tweeted', 'instagrammed', 'snapchatted', 'youtubed', 'dunked on', 'subteweeted', 'favorited', 'upvoted', 'downvoted', 'live cast', 'pinned', 'vlogged', 'blogged about'];
	const myHomework = ['homework', 'project', 'essay', 'film project', 'visualization', 'infographic', 'pre-writing', 'term paper', 'lab report', 'reading log', 'summary', 'article', 'flash cards', 'study guide', 'textbook', 'workbook', 'reading book', 'diorama', 'poster', 'dreams', 'laptop', 'computer', 'tablet', 'momentum', 'report', 'slideshow', 'slide deck', 'presentation', 'worksheet', 'handout', 'notes', 'portfolio', 'blog post', 'comment'];
	
	const who = myDog[Math.round(Math.random()*(myDog.length-1))];
	const did = ate[Math.round(Math.random()*(ate.length-1))];
	const what = myHomework[Math.round(Math.random()*(myHomework.length-1))];
	
	document.getElementById('excuses').innerHTML = '<div>My ' + who + ' ' + did + '<br> my ' + what + '.</div>'
}
	
export default Excuse

