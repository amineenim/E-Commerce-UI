import { useNavigate } from 'react-router-dom'

function Footer(){

	const navigate = useNavigate()

	return(
		<div className="footer">
		   <p className="rights"> 
		   All rights reserved, By Maourid Amine</p>
		   <div className="social-media-links">
		   you can reach me on social media 
		   <ul className="links">
		      <li><i class="fa fa-github fa-1x"> Amineenim</i></li>
		      <li><i class="fa fa-instagram fa-1x"> Enima</i></li>
		      <li><i class="fa fa-google fa-1x"> aminemaourid1995@gmail.com</i></li>
		   </ul>
		   </div>
		</div>
		)
}

export default Footer