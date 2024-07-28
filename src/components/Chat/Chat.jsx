import React, { useEffect, useRef, useState } from 'react';
import './Chat.css';
import EmojiPicker from 'emoji-picker-react';
import { onSnapshot, doc, setDoc } from 'firebase/firestore';
import { db } from '/src/lib/firebase.js';
import { useChatStore } from '/src/lib/chatStore.js';

const Chat = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [text, setText] = useState('');
	const [chats, setChats] = useState('');

	const { chatID } = useChatStore();

	const endRef = useRef(null);

	useEffect(() => {
		endRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, []);

	const handleEmoji = (event) => {
		setText((prev) => prev + event.emoji);
	};

	useEffect(() => {
		const unSub = onSnapshot(doc(db, 'chats', chatID), async (res) => {
			setChats(res.data());
		});

		return () => {
			unSub();
		};
	}, [chatID]);

	console.log(chats);

	return (
		<div className="chat">
			<div className="top">
				<div className="user">
					<img
						src="./avatar.png"
						alt=""
					/>
					<div className="texts">
						<span>Szymon Michałek</span>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div className="icons">
					<img
						src="./more.png"
						alt=""
					/>
					<img
						src="./video.png"
						alt=""
					/>
					<img
						src="./edit.png"
						alt=""
					/>
				</div>
			</div>
			<div className="center">
				<div className="message">
					<img
						src="./avatar.png"
						alt=""
					/>
					<div className="texts">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus ut ipsa, nihil
							laudantium cupiditate perspiciatis sapiente adipisci fugit molestias!
						</p>
						<span>1 minut ago</span>
					</div>
				</div>
				<div className="message">
					<img
						src="./avatar.png"
						alt=""
					/>
					<div className="texts">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus ut ipsa, nihil
							laudantium cupiditate perspiciatis sapiente adipisci fugit molestias!
						</p>
						<span>1 minut ago</span>
					</div>
				</div>
				<div className="message">
					<img
						src="./avatar.png"
						alt=""
					/>
					<div className="texts">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus ut ipsa, nihil
							laudantium cupiditate perspiciatis sapiente adipisci fugit molestias!
						</p>
						<span>1 minut ago</span>
					</div>
				</div>
				<div className="message">
					<img
						src="./avatar.png"
						alt=""
					/>
					<div className="texts">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus ut ipsa, nihil
							laudantium cupiditate perspiciatis sapiente adipisci fugit molestias!
						</p>
						<span>1 minut ago</span>
					</div>
				</div>
				<div className="message">
					<img
						src="./avatar.png"
						alt=""
					/>
					<div className="texts">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus ut ipsa, nihil
							laudantium cupiditate perspiciatis sapiente adipisci fugit molestias!
						</p>
						<span>1 minut ago</span>
					</div>
				</div>
				<div className="message own">
					<div className="texts">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus ut ipsa, nihil
							laudantium cupiditate perspiciatis sapiente adipisci fugit molestias!
						</p>
						<span>1 minut ago</span>
					</div>
				</div>
				<div className="message">
					<img
						src="./avatar.png"
						alt=""
					/>
					<div className="texts">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus ut ipsa, nihil
							laudantium cupiditate perspiciatis sapiente adipisci fugit molestias!
						</p>
						<span>1 minut ago</span>
					</div>
				</div>
				<div className="message own">
					<div className="texts">
						<img
							src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADqATQDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAwQBAgUABgf/xABAEAACAQMCAwYDBgQFAwQDAAABAhEAAyESMQRBUQUTImFxgTKRsSMzQnKhwQZSYtEUQ4Ky8DRz4RVjkvF0osL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQEBAAIDAQEAAgIDAQAAAAAAAQIRITFBAxIyUQQiE0Jhcf/aAAwDAQACEQMRAD8A9OxlRpmIO+5zQ5MrJ5wP7GivkDwlcN9aHiSfMEk7H0rlq45yNCKSQxIKxnINRrNxwCpGgyw5kDpUu4tm05EiWSc+HMzXJeQNbgks0+eKAbVfDpBIwfIikOK+zBhWeCAcw0HzrSG1J8SP/wCTTy6E7ZypZ4gOArSoBYOsQDjes/iOxODv+JZU5goZFbtsAWXIGS+aVtcKhvKQzKMsYJzHKsLhL20mWrw8ze7F4239063EEwriD86SDdocBc1xdssDho1J717O8b6udKIy4gNgz7VW+tlQq3l+MZkalHUGs78p3Gkz8rB4f+IbogcRaW4Ob2Tpb3U4rWsdpcBxOLd9Q5xoueBv1x+tL3+xuz+IAdU0FpKvbx7xWTxHYXG25NlxdWNm8Lexpbzxv9j/AFr0zKGww+dJcbq4exrt5bWttJ/ASD4hHSvOJxna3Z7BdV62AfgujXbPoDinl7cF8Wrd+0iw4PeISU2I8S5P61X7l7H510Tv2m71SxknLHqSTWh2ekOGuYXvB3RO5O1Vuot29bKEMG2K5BE8jWnasqlxnxFvukQNmARJIFVjOSoqg69/auf48kqAISeQB3NEUeKfXfaouKpuzqJnBx05VdSPDwsmTA25+lWNkXBbBcqdR0nrjapgQnhjAwfrUuECBmJ8J8IjJbFUEqgRW0yADpHsN6ukiG5jOKlRc7sawAZxG8RzqUB5RsfTaqSC0C44k/FMb7nM0ds5BMZiOlAMKzfiAMNPM86Y0qFWJjOPeiFXLOefhJnrg1Au+FRbknSFA6czNEQQRiTBPrirL3ZU6AAzEKYHz3ppquSFIM+EfSrJIK78oFWYAGAMCAAPSuUHlE7id9udP0BuPEwkxiT1NFtSNTbAkaaq7eIY2Ub8jU2jIhtwxMR8qPScC2IMHrV1nUDkRqP6VEZ2ny9t6kCdUb6X+lMOPjGqdIb4ecj0qwgI6jcAzmhh7jQApBAj0mrIpVbiNlhpJbrNMkGecxOI3mpE6xnmPpUwQTHMmZ6dBXCA0xAE/oKQVul9W/xDTH9PWaGZXMnp6ijXFB0H8RGOmaECodRJMmIO2KVIygUKIkTBidsV1UbWWOkSBvHWuqtnsBg+Ne/iAihnn1wSOXqKM8kDUsHURn60L1iP1BrOzSo4kBBq06dfi1dPSp7q0oHdAamwjAYGZ3qSEIlpgGcCeW9Dt3kBHxMoMjG04mKLoz67DrOfWlOKB+n1pwbeUileJB/561WXRA2hNq6P6x9KpZEXl9GFFsj7O+P6lNUtffJ/qrMw2H2i/mX61PEKCTPU71a4PGPUfWpvjLe9BwHiLSFUGQFAI0mOVDa3cS1bCnUYkl8yDTN0GF/Kv0qLg8KflH0paVKTu27fdp31sMH3AGoD51kcb2N2aVS8ga0XZQO6OnBn8JxXorg8KflFJ9oKSeGgTBMjyjaoyxipayLdhOHucPaSQqKYkzvk5rRBQOjkgtrCqB8oNJcQhN5FAyQAK0bVixrOlT3kojSSYH8wowFEC+LbmZq10KLnwxpAJgb9DVgpNzAnf1pfi+O7O4e59vxVlHhda6wxBkiCFmtNbI6wPhJiSqyeVW0qVQtOlbgZsTiOdZp7d/h8sB/6lw4n+bWI8jK05a4zgLwU2eKsXVhiBauI2cCSAZ/SmVMDxAsAdLMSs77edSgHPIg7c65W1qSAQus6RsYjeKJbBkGP/NNJcKmrEnIPy8qZKtChhBA2HIUIyWLEcxPqMSKYYHwydlGaCUCg+4O3OoUFmPdyiqY1Hf0otsZHmD71w0BBbg6iSQIPXBqic/xHyjPtvUqJMbYOT6b1LTJ5HE84wN65d9uR98UegFgoJA25mfiPWiWfhyuwMHnFQyoScEiDg9aMikIcY0xPMwKJ2A4GBykRHpzq66gWOCdLEdJmo/Tl6+VWVR4uWM89zTJKuun+qDuIn0qSpFpZ3JUnrMzQ8O0ICFUxnedtqMwYIoYz4hmmQXSepg9PWpXdpyIafPlXZxHuObGpTd8TCkx70gC/KQQi4UnmPaqBdTaQdJEkH/mavcJJn8OwicHmKooLNqAPhMneZqSGC3Y3PsK6jojAZbnNdTBR2yV5ggiOhoJGxHz6eRq6l/HrEMNMwZ26Gqnl6mPnzpXpcW06kuLMSozUW1CWldNImCxPQdK4llRtPxeED3MV2ggg6iYgsAMGenKlZ6Dq7T1g/MUvxIx7H60wgAWBtAoPE7f/AC/arvQhewPDfH5arbH2yeTH6Vax/n/lFQoi8n56zNS6DqPr+9XvjJ/5yqLwhj6/vVr4z7D6UBW6PCn5F+lQ4+zt/kFXuZRPyD6VVh9nb/KKQUuDwof6RS3GqD3EzEmY9KbceBPyil+MA+wB5sI+VK9KjPKL/ik8lxNX4riuG4Etf4m73Vm3EFBqe9cI1BFHXrQuJv2+HuNeuSES27tAkgDO1eH7U7Vvdo8UWZpWRbtIqk6LQGBA3Y+X7VOE2vRjtL+JeP43vLSueHsOSdFpimtZ2a5uax5USQZIyZMwTtBmmh2L2kwXTbuaH0k23zviYP61x/h7tSM2G0wSsHK+Wc10RX4y/ooWGAUgbS0kT0YGiWTcsOr2Ga2+r8LSFbkMcqMOx+1BCG08CciSCBnamLfYHajFgFcKygNyEYMH0pWl+Mv6b3Zf8WcSoSxx1sXuXfKQLoCiAp5GvZ8JxPD8VbS/w1xblttiNweYZeRFfLOI7D7V4dTdsy5SWIB8Wea0TsH+IL/ZPGgXZ/wt8ra4xDPgz94g/mX9RUlljZ2+okqHjMa9uW/OjETEnGY9M70tbuWLi2rtphcsXIZHBkOrcwTTRAEAbRz996IzcJAYjHhOfXnXM6JpiCZULzM8yTVljxSDGhifPA2qRZtqvhGbkLO5E1aXNJY+u3LYVZANQOTAP0qGEMRvmPXAqUOkz/zkKPQpclicZOD0E7UVJNt+gWAOYjEUNxBeCPizqHPeKIIFsBZIYFjP1ohK5/uenpRLY+KP5QPmTVOY8ifQVYMVDECSdAA6k0BCBBbYExJIJG+9T+FRnDk+grii/iiV3MQucwedSxBW2RsdUfKmSgGB/u6eVWSfEQMwKjYgc425R1q9vAYwcBfpSgoDkyPDBBJIjBPWuQM5bTuY1Gdqm4xJ56lmegnaotzOkYYnWZ/F5CKXp+DhQNyZrq5jETvFdVJJrq0v/KJEneao2/TPsw8qIFueIswO+BtQ2GY3PTlHlUWcL2nTrRlmJU56QZBoYt8U3hJWDEODuo9KJujcxpYc5/TNSpuaTbfciFO0etKwzNgg21jkIz5GqcQMD3+lHQQB5ACh8R8I9/pV+FCtje9+Sqj75Pzir8P8dz/t1WPtE/OtR4brw8Tepqb3L0X6V1/4m9TVrwwpH8q/SkFH+7t+aCoP3Vv0/ersPs7f5RUEDureOR+tAUYfZp+UUtxvwWZ2keu3Km2H2aflpfixK2PUfSpy6OPJfxVfWzw1q33hBvZYL8TW16+UxSf8M9lL3R7SvLqvXye4DD7u1tMdW51T+JhdvdtWOGKyBw9i2g5NrJLH/nSvV8PaWzZs21EKlpFA9BVTiOz4Y7u6Jb4UtnM4NHS0gYqxJgEGZ61bhL4W4QTGMH9qtcmXaTDGr8ddvIWlDAgfKpXhy8hc+QqqkgjM+1MW2ZSWUkGfw1F5PK66IX7GglSACNx65rxP8TdkopHGWFIMnvQowOjV7i8zG48sSSZOo5PrSXF2RxFi9abIdSCNprKX81P0x/WLM/gPtJ+Is3+zbnifhD3tiY+7fBX2P1r3jBhExMD0r5R/DqvwP8U8Fbkqt171kjqHRoP6V9YcHVmJAHp71u8rKcuAmckSpzmYx0qLROod0JVTEkQPMgVe2JJ3Eq2T7VyBUt2wpIbeBz9RTQlx4m55OKldm5+E4+W1Q2WbfJO2+9XSTMEAwfqKfoLvidQBYmTGwFGRSEkEFYxzobqwDRHLVPKaKihUIB2gRvzG9KdhHlz6fuanQzI2n4lKEewrug5dBuak4Q7yWXbnA2MU4FBauv8AeHSOfoKtJKW5EQH+WwNXLG4qpsSQSRtp5mam7uvkpH0FMgz+kY6n1q9sxjmSP0FU5tGN5PX0qTpUAndWkY6DalAEylWYDMkmeQ8jVrSiSxMFRtyHnVGIYTJEkGD+lSkrqG6vMnf2ml6F2YnSeq11c8SIwAoxXVRaLWiza2JySdYj8XlVW/TBjn61dfCAo37yPXnmquP0jPSp8P1ZBOJ3kSN/UUBVa41xmZtCltySQoMbUwnWRvyqoZl71rY1BjkwcHmaXcOdm7IGhQpMRid/Sq3o0j1H71awCFExBBI65yZqbw8I9RV+AnY+8bzRhVW+NfzL9aJZH2o/K9VceMfmX61EN18eI+9TcHhQ/wBK/SrXx4m/5yrn+BPyLRoKH7u3+X96gj7JPf61eB3Vv8pqP8pff60iUI+yT0/egcWJt2fMr9OdMn7tPQ0vxn3dn1XPTG9LLo528t2nw2vt/s67pBQ8J1kg23Za2oJwN8Vm9s8Vw3Z/E9m8Zxci0LV2yxtqGYuWDgASPPnQbXb6cQgucJ2fx11HJKuxtWlOY3YmnJuO74XTY092wZpxRW4ixcjJEcia83xfa/bhDNa4S3aUDIu8Radj77VlP/EPGIQeI4PeZezcU+8VUldFznr2+u2AdiJ35ipXibKmCSTvANeZTtJG4cXEvW2DjUBrUNB8iZrKvfxDfVinDLbbTAa87DQD0Wlqnc5Ht2trcdnUCWigshDCDP715Tgu2e0WMtxfZTMSIV7rSJ/LFao4/tltJFrs25kZW5eH67VnlimZb5KcNZVf4r7FumAF4i6CdhItXCK+hHltkewGd6+c8Dx97jP4h7OW9wa8O/DcUbl0hmZAqqysrE9ZxX0g6YBXYqDnbatJLHnfTvbgWVWKnxaYBbbJAk1abaOkQW1BVkyT51AClXDaoKRgSckV3cImkAk3GI0E8syTVMktGp/U7etXQAzP8pmKq258yw9TNXtwZDcxEe9HoBcCQBJmNMnJmjwgTw8mAPzoBEE6h4tTAgbeQ/tRwCLaK3xeDV86cCn6efP2q2rQjPA8JJE5zFVEf3/sKJpDWnBE5MeXnSgDRCwDXWgtEDYT5RV7mCudlH6muLKQtsDxYAJE6TFc4OJEQqiJnn1pzglDJzv+1XOkKJEyWg8hHWqdBtnA/vVzPdxpkHJxvmlOQVJkkuYbI25dKJaLjEapyoI5VVoJPhmcDGwii29eIEwIJjPtSnZ1zhdTT5fSuqSJLTvNdVJJWwxcsrE58SmMeYqz7z9OWedUQLMloBOZ3JBxEVe56+nrUzo1kzjYz/w0Bb4UIhENb1eGDnzFGSc+xNcjqzMHALBiVaBp9AaPD9McKzMh1CDmR0kTRLo8PyqnDg6S7fE8k+kYxRLklD7VfgKWvvl9GFRcGR6j61NsReX1Ndd3MctvnUQ1r+59vpUPm3b/ACirXtx5gfSqn7u3+UfWglY+yt+/1qI+zX1b61YfdJ6t9a4fAPVqNBX/AC19/rQOKH2NnBOVpgD7NfU0HiZ7m31kRU3o52832paTtHiOL7Ne22qzwqXbRB8C3GVon+qayOF4btLiuD4S3a4izw9oWrYJ0M94gCCEEgV6O8Ta7RTRJ7zSLhP9FmQD70ktlbdrjeGDKlzhbz3LAmDcsX37xNI3wSV8oox609eSf63/AMYfFdhcJB/xF+8z/wDu3OISfQRprNtdilrwtWdZtgjWzE6FXnJIr1zXOLsKAbl0nmHkgn0OKT4/jLzcDxWh075U7nhrNsDvLt67KiEXMLkk+XnVcnljj2xOx+wLvaPC8TxI4pbVscTescKAmoHR4e8fyP7UDs/sMPaud4rte4Xib/D8TbtmRbuoxEwMkERXt+xeFTg+zeF4cDFtbSFmwTcaWckeZmsrirF/gO0+0OL1Pa4TiAhuXdJ7tONHhCMw21jMnmPOnaj/AIpJLSvDdhdmhZHCW3uNJOuyT+rnFMHsvh7GnuHupfYACzbYdxq9I396MOMd/jvKybjS4gk9SDmmrPFcHYYPdu2WcghEtsty9qHi0rbWTJ2qbN9tpJjOCXB8Nesp2/d1D/EvxF2wXMaps21VtJHq1eu7MZ27O7Pa4xZxw9tSzT4tI0g561563Zvpw9hWUG61y5e4kE7d9rdxPlIHtXpuFj/CcHpAAHD2RnlCAVOO9uX/ACNT5T/6YAwRq0ggAk7wTXWXBcAAsgwrZgTuQDmpUSt0bE2zvyqyxaWzpIg6QwG0Hma0eahtz6n61ZdKgscaYI+ZxVT+5n5narCArSJgDflvmgUFmYwQfinT1/WjghgGzMKueQFLOPEN9ZIIxTQMopIAyMjY4NENQb9Y/SrHJtKTClnZgPxZAAqo3Hl05VZ0S6ttSWBlyukTGYM0Qqg3QCoUDWWIAUchjNWcyd4wvzg1RrKIoUZuONKHp51d5k8zIk8pAphUc/XnuauWK21jcj2HPM4oY33nO/8AartDW2SYhQCfPeiEWdtRbTJDkkEzIxOKZtNMRJSAFJg7bzS/iDLjbEz+tHtDu0EtOtpJHKdhSnZ3pw/FP8xrqgNG53JP611BE7fdkgsBLFgkkRAq9zEwfnsfKhWl+0fAKQC3PxDaBRnggRBmidD1VOe/LHQ0K4xDi2ttQ25YknBONqLb5j9Dyrm027veRgr4ozkbGKWuD9NcPrAh2DGYxGMbVd/hJ6UDhjklVIRiCPIjrTD/AAn3q50RRD9rb/MRXXdz71wxdT89de3Pqag1rp+H0X6Vxzat/l/euuZCflX6VX/Kt+9FCR90vq1QB9n/AKmrlP2Y8mauGU/1miBwzbHq1A4rFi2QY8Q+po4+7/1Gg8V/09v1Xb1NTl0cZlwFb11jANxUaCZ2HKlOPt8Le4cpdRGIHhZgCyk58Lb09xNpHPDShkTBOD86yeMYw6ndSamV6Xz+kzkjzvFWrABtzcloCfaPCmZmJp3se4nZNx+Ks8KvFXjYdTIXUEbDAagcVl8SzLdd7p8KtIgE49BTvZvaHCXy1jhjcuX1Us627LE6R1JAq5a3tx2fHbdtpCSni1d3cwV9IxV17V4y93lmxZW7auyb73ydBxEKvP3pG/asOxuPbvqcTHDt4idhiroXRSqJdVQrN9ogt+FYDHxkbSPnRVfqVm8RwvC2XLWLehhGpDlfMAH9K1Oy7nD2yHtoiswiQADPMGM1mXeM/wAUWCcPfKKSO/ZAttiP5WnNE7LJNy88HQzAp1DDBIqbRxHrBcQjUxgaSD/at7h0NvhuGQ4ItJM7gkTFYvZANziWOkMLahiGAIBkAe9eifduRECN+Q2p4zh5/wDkfTcmDgWAIWAWKpJ5AkyalTbW4giWYlQCZ2xNRpVkZWkSUA07gya4WVtvbCmbhIMnbQN6txuMTPy678qKgYq2kgGBvQj5dB6+1EUeC5kgQJjcgCYFOdigsG1rkTqwf6p60wQVVQxnJP6UoXae9YiQurbA5bf+KaYEJaE4gxjMRsaUNQESPXb+9WZWZVyAqqWkmJM9d6oNxyzPr6115NSWBGGYBiN+oFE6KrW7is6lmJjUtsgeHPM+dWc5f837CpH2ZRSsgwNXmTsBVXMlvzNP6Cn4FRv5iZjYb1NxguADLqiGBMxzqB+gBxzqbxYSFWDiDzIjJFHgLvloDDIgEQIE7TRrTBgk/g1AAjn1NLeGRBOqZGBufOnLZBXK+IKZK7AjEVM5phucrtt+5rqkiY9BGPKuqi4Jq4UgtpBfUoiee2aKwARABIAAzSyEKdwyk53iOWaaaCg8JGBg7ipx6F7Ut/EfQiDvVdah70nxgqADGFMfDPzq1s+Lry8xXOnD3LkOsNoWG1QWxtFHg9G4W4rtcCiFVsdPOBTLZU+lL2FAuNA0i3FtY2M5JNMnY+9XOIVpI/ep5OKm8Mn1NQ33g/Mv7Va/ufeoN1wwtv8AKKr/AJKerfWpbNu1+UVA+5H5mopoX7qf6zUqZT/Uahfu2/MfpXLHdt5MfpQS0jR/qNA4n/px6jf1oymUP5jQuI/6cfmX/dU5dKhG6Tr4WTJJz6xWb2tZ7m4l7Jt3lJaOTTBH0NaN0ktw5iCXM58qZv2LXEcD2gbwJSzYtlDEBXd9AYH3qMJu1rjfzY8Vc4Q3boKmAoBBYbiaYbsfswOLptvbuFIN6yz2nYMIIZrZHvRVBsXQGkhSQa007uIaSCJ0k+9bSO7DOXism5wfDOqovF8aLQI0qvF3YGmNOTnHKpXgOywWd7Rv3zJ139V65J38Tk+U1qXOG4VgraQAxn4unpREWyixCZMCT+tFdHnEImxbNpkdFgj4W2Vf71mpZtWWuG2Cqk6o5DFanGX7ZQhDucxG3lVey+DTjON4S3fMWnd4A3uOiNcCnyxmos2588+Wz2Lwxt2Ea7Kvfi60bqhgIp9d/etZ8EjODHmcCg2lPeIuMQT0IAzAo7kEtGxOPMYpzp5mV3lt0LoOptKiCxEkQATyqbD6mHhYrBCPsAu+xzUFdVm+s7hdpzGYogKoyKpGkrBHIGJ3qiC/sPX2ogOkBpgCZ8pXeh9J6D12qXCFDIJyYHKQBvRPaQMgOp04BEztk7005Jk7LLafSBmki8N4iCDggHYUy0aRDSIP6Eb0pT0lYnePXc+dWLA93bAJZVDmCAFXqaCsTPrv1iou3LlpjCsyXLaAkbTGmPanLwB1W4zTccdUKkTvErUNzz+Jj+tBtvda5ba4NKEhUG0kCaKTIkRz323NG9wkrGABy/tVrvegExIyBtIqq778xPzG1TfYjBB0mUABy5POKfgLDVqGIKxmM5EmaZXUEYFdKkE4FLISrhmGEMDTjxHaTTepjabV8QhW6E+UVOIoZmT7D9BXVDHxN6+fpXUqRG3qMAIM8twCDvTLB9HiIJ5xSauRkwC3g1gRpzJkD2pxi2nxRqjMbe1PDoZBIfGuZ8/71F1rayzFixhUUCRJzEnH/wBVyHxA4OcHn71a8oJsMZ0qxDCJwdzR/wBT9G4U3T8QAWJXrvzps86TtupvE25YRpYg4BxsDypuZLDbNVOipN51+61a/ufX9qo8gnrir39x7fSkaD91a/L+9QD9l/rap/yrfv8AWoXNth/WY+VSaq/Bc/N+1SnwP+YfSr2bdy6Li21LNqGwwMczTtjs4gHv3GSDpt8o6tV44XLots+2rMGCgk6sAZo57P4i/a7slbZwTrywGqdhWmiWrUIiBR5DfzmjBDqkbEZrfH4z1Fy10zLXZPBoEa8Gum0ZBuGBPXSuKNd4QcVwPGcLIQcVw920pGAhZToOOhg0fiGUKEMy5CAjqxijhYxywPlWkwxnUH6u5Xye/cvExctlbtt2s8RbO6XUJV1Podq48TfVRpkgDnuDXq/4m7HbvG7V4W2W1BV7QtKMsFELfUDmBAbyAPLPlbltWUNbMkjBGzCuXKXGvVw19cf1j2E3GXmg6gORUmIj0qjcVeICjVp/Ed8bwDXG3cPp6c6ullmYasDEk/tUbXvKpsrcusGI8AwBPPyrc7DR7/bvZ9u38HZ/DcVx3EkbA3V/w1lfUy59qzmuWeGsu7HTatIzE5JgdPM/vXrP4V7Nu8JwN3i+KXTxvadwcTeXnZtBdNqz/pG/mTRhN5I+1nz+d/utFuCUubltirjUWBMqZxil7iMkSsDlHw8udayjJj2oGnxOGWU5yMVvcJXl7IA4VdUKzqGI5qFJifOptva1kKAXZSWgkxuedMvwtu6pUHwkgwDEECKXPDmyy6VICq5djsRERUZY2HtQ7j0A89uVXIfRhQRMkHfEVQ7/APJ9qI7FLJYEQGJMzJI2WfPnUT0yQg3Pgk525k0y0kLKhYWIPWRS9slXmQD8Kxspb/kUzcJO+DoGD61OPSqGPXcHJ9Nqv3um6QdRUqAei43g1RTMnfETVb7srC0i25Yly0Eso2BPmaJdYgdftLjNvatR3fIaiJJFDn4ecjb51a0t5AQzArpML09KExELk7DA3p3ovTCEkr6j9zFRdIuJbczqkleQ81NVtEyBiZxHoarcYydQ0oAZ66ickCjqF6GqlyVLAAkAsMxG4pt2Gk2xuugYM45Uim+pZJUzG53psFSCwnU9xSxPPy9qMDsDffcj/wC66pnzFdUgggBZdUEK+22R+1MyxFySYDsqk5mN6SRh448OoGGESKcRWCHUwbbI6eYp4FQlPjA89x+9FZvtFUmFCM5EwWaTGaEPinziQfrVr1u1dNtWZlY6tJWBAxOTTnV0Xoli6nehEEalBYDAn0Oad/EfQUjbtKly2ig4Bus53MeEAmnZkz5Cqxl9Olrm7elTeMlT/Sv0qt34j5z9am9sh/pWlQkSbSAAkkkAAEkmdgK0OE7ObTPEc21d2D/uNV7Ktg23vMPgLKnvEkVpaywIGADHrsa3w+e5uptQBatKFUAAfhUQP0qGugKSByzNQYySKE8Kr+Ymt9I2nWzBTIxtgVKO5JViQRmNse1CtGRFXMalI3H0pipcKXsg8rqMPUGRR3e3aXVde3bUbtdZUH/7GlrwLISphhBBByCOlYtzs5r7PdYvcYkzrbUw/wDkaBOWvc7T7LAIHELckEfYqXB99v1ryXaPZvD3rly/2arLqabnDXALYJOS9kzHqJrQHCCy3hOnqCuDTFo3A6yEwDGf2ioyx/TbD6ZfO7jyT8NetHTdR7ZPJ139CMVTSihiRgfzcq9Zx1k3eF4rUqnQvfW4xDJBJHtM1lcB2cb9y3xPEoBwiqbiK6hjxB2WFP4eZJ6YmubL52XUej8/8jHLD9ZAdjdl/wDqN6zxvGFU7P4e7r4ZLp0jibyf5rBvwr+Hqc17tXsHC3bRgbC4hPyBrzvEXlu40DSi6E5Ki9FpJeDsDvLmjLGF6itccJjNOD6fS/TLdevYESRvuDS73mUFcEtv7Vk9mWeKsa2NziBbYQiOZWZGQrVphSWE7nOKtjRrVzRCsozmr/Zs5hhEZB+maCR9oo5EVJHiY8gB86Am5wdt/Eh0tv1B9qTvW3tqy3FEFCBzBM/Knl1gjSSMSelFIS6DbuqDMbjFRcJej3p561oa6gORqkasAEZBNMMxYaiMkCJ6AmDROJ7Pa0xuW2LW9QOcsh8/Kg3JwDkwv0rm/Nx4q97qFzOZmB5b8qI/dreW4dgh1EZ6QSN8UNCCRJnKjGwyNqqHtjvS2nvGvMLmoAlRmQq9Bj50pdQ/V1dSzsgOllcbE+PclulUYmRywB57CrWrqut4IPAJg/tVX+LcDPPy6UW7gnYtn4l5ZP0od8POp/EF8JnZvNavaAMCTkNvvVbyBSIYRqwNyGjaKd/iU7BSZ1gFQpGuc+1Ok+FJXT4ifUAb0rZW8SdJzChvL1pltcKHMkBvlFGAyvIcHpPrXVX2Y+ldUBn2zJ8ZGkkCBv703aKFCBk/iMfEdqSTRqAMCWAbVOAJ508j6kwunTgrBEfOn8xnwCY1bTkZFWvaNINxlVFBfInMCMRQyYads7j15irX/FYuDUB8Jg/iiDpnzqp1S9W4W5cZgVUd2TBLYaOQFPA1nB7WqytvxMoDaQY5yRnE08rQpJ5TRh0dBuk6jnrU3W+zQ89CxQbl2SwHImjWvtW4RTzKE+imaO7oNzgEVLfdY8CqGA6nJNGwFaBsxU+2KT4S4RffbxrsdutMljN5JEhw2Nsiu6ccMvVblzYeYqtzKr5g7VQgl/emlA0rjlVJpG3qDwZEUdwTkbgYrriw4b+YZ9RVjzpwBB5BB35+tUAKNqG3MdaswzIoiWyck43igK90t0Hw6us8vnVbdmyLmi8I/lPlTalYgY8hUuAwGJIiKQ2T4ng7RW5aBhL1tkOnfSw0nNLX7RS2LNsAyALjGIAAACjyp1rqd4QBJAIYnkR0FKuXJhQd6WlSlU4O3guNXQZ0j2ppbSAAhFB5GBiiC3fkagNqsVcbKaNDau0VKiSDXR7eVSlLQ2h8keVSpBwee9WImjf4cFRmG59KDDRtKsDydQfSjeEnbcRVLlvRbbOZUk+lXsw+h+qBh6tQEXhotPznasG8VVmGwEAfIc63eNcqiIp8Ttn8o3/asHjwVZYzqB8hI61h9f47PHtRLiyokHxKMbDNRp4a87sVKXAxDLMkjqw86Bb3G2/Llg0Brlq0yi2z96AC3ggrOcz9K5f1qbrXXJ+01s98bUC0FFvPNwZJqW+IwJzMnlvS9t0NiEBUBgCG+KSZJPrUd6QxmSJPoPWnbqCQ9a33/C2f0oF12DXLQLEKQxLZZn/mB6VdSHRikSACB/N4pih8S6kk8lgLAAJA/DVZdJxnK1ljKoI1MdYbMsV/ATTdwnEiCUMilOFFsuWkllUkNvpHMx+lHLlwr9UWPMFt6eF4GXYTHPxEeQrqgzyAjzgn9a6sjZ7aSX5kjTnOfM00Lqolq0WDHu5BG5jBJHSs57zd5GqBBBxv7US09xpDrELpBJnwgyBNVheRlEXLjM7ZIzuNveuu3GCoobSHZFYncLBJIPWhvAbmPT96m8tt7RDzHg06fimTEU57Ag3xbuKFMPrKkgnCjHiOxrWRi1p5OxYVimzZtrbRSW75tBYkEhPiMEVq8Ofs3HRmA+VLHexkXLfaODzj6CtHg8tZPS23z2rIvuEcNOPDJ9q2+Cttb4fh7lwQ91Q6g8kYyJ8zvWnzm8yvRm2dL2XnY+IdQREGnvALmCZuLJk/y1nrnWs5Ukj2NMJdBNpjExpnyruZGGgGBvRto9KW1TcI6RR25elCXMoYZ5ZFR3fmflVl5ZqxJAJoAZRR61yHlUhpn9ars1MOIKweVRcfwKAfidF/Wr6kODvQmHjtLyNxfaKQFt2FLd42MaY/euPD21YtkmZ8qMfCN9qoLisSJpCOZQ1SBGOVTIqaYCa2jZjPUVQWCIz6Ypiuig4EtoAgkz0oorq6kovxrBeHvnohHzwKvwwhFIwFRB8lpfiGN23fXkQB8iDRGvdxwmoRJlFB5ucD5b0qQPFXA15uigIPLmay+0M2kIEkPnlggiKazgsZY7gZOc5NLcWoaw+QT8UbSQdqy+k3jVTshaIlPzfQHFRbtL33FOSGIbUC08xz8htVVbSC0g6Vdh7LIqChdF13C1x11sy6dAjwxO8VxeRtexQ5a3nTK3FQlfhJGTHptQiZI69OR9auoQKjKWJlQxJzKydtqCTJAJ3glRz86WV2UMowCsSwUQok5yScYqjOpBCaiNRLs0nxb12oKjyuoELtuIG9CVlUr3bkAqNTHmSY+ZoyuhibtSYKgRBFxcz5TFNOSQdgYQfvS9hWlXVhLBhqkDSRyjej3Jm51BX0PhrTHpOXYJKyd/aurix/mH648q6oDzxIZ2LTqLDAECadslgCGY4kBSd5zNK3O81vII31gjIEc6cspbAMybgAmZESJAANHz7Vl0Hdw85333HvUN400yAp0hiek9K698U59Rt71yDUjCY1IRMTBOJqp3S/osjFn+xYLbWBrYCCJ5DlNbPDHwuPOfmKxl7sW7VkA94T02IxqFa/CSA8xqhZjbaMTRgMiPGwqsTtCk/rXrL4DDhimFayNMTAKaSB8q8nx/wOTtp/c16rhL4XhuGt31IZrNouDuDpGPWuj4fyqcuoC4YOxUScOPMHeqG4VKlfhLq0eUwaeuWgU7xDqCGCV30tmSPKs3iUYSRtMmD0M11M2lYIdnI5QDTZpfhk0oP5m8R980xFBVTWLZOqYO1Q10uQFGKIVDb1ARV2oJZRUMAK4uooTXQTGaAqyMxMYNVti6t2yG+HvBJ9Aa4cRB22oyXVd7IxJfb/AEmgGSZFAYaSfOmDCjlStxjJpQQVSD9KuSBSouQfSiq5amBZFSMUMNVtWN6FRfGKpduIikkieVBv8SLNtiBqb8I5T51jPx3EF27yDnYCIHlU02jqhW6nNKXOIF1VRZItFo82bfFUPFJ3bNnAkgbxtihK+hhoKiZALdOtLewYt2rjAtcYW05yYx5c664lu4VtIrBCrAlviaRkxUDJBclj6wKZtANdOAFRQMbTS7DCa21i5dtXY+zW4GIGCukQQPSlP8JfKjTePdlfCXB1Ivoa1u1VIuoylQX4XJJ0j4ysk/8Aisot3Qew11CHkFmeQkxmBkelcP0kl1W2Nq9qFtlBnRddSRs0DBB86rInoJGOdHcKqWlU+FVMeYAicUtOeQnH9R8jUZTWoJdmlcIjsQTkAAAmTGBApW41svJCrIVioBkMJkGaZVo8AwXLkEmAAABIrPI0kqxBIZiWzDZ3J3p59DFscKisqaiwcoHCnkNgZo1zAbf4on2ikOz2YlidQ0tCsT8a7lc7gU67SD+dv2rSfxRew4n8IrqgHeAd66slMG64uOXwMwYPxR+IzR+HaFL3B4mZlVyMsD1NKXTbDsFTGqAomAD60S3dUlbcTpfWMYkjG/SnjeTvRi62RPTl+4qhuFbTsrAEKQCdhJAmqXjzzkb1CBSjasroeYG4jMVW+S8VZ0H2dvxs2kCACZ3JPOa2eB0shaZlUM9ayLaWUQ9xp71oTfURMT5Vs8HC6lAEBEAgQMU8JyKV4u2Ll2xbO1y9ZtnpDXQDXq7lu27ujD4hqX2xXlbzRxXDNyW/aPyuA16niJAW4u6NuPOun4+opQtxXCMxHjTbGDFK8RxlxwXZUKbRpG3qM0+1xL4ZXhW38p8qzr3CX11kJqQzq0xEdR510JLHta5bvcM1hdV03bdk2SxGu2fiieYGa9RbuLcRXUgqwBHvXi+Et3R232XbKEpo426HjEJaKwfPNen4Z+7BtHYZFAyaFcROKCLsYoqup2ihmA6OJ6TQyjDIE8opwwRVcLJoMMJbVQCBMZPnUL3aXbMQTJ+Wk0Nma4xg42q9tLaPbnxMSd/Q0A0p184JOZEiPI0G5bOoicUYgEEDFKm6yuVajQVKFalDFX1qRQ2ImgCknFDe5p251XXyoVyWoVFLrG4RQLnDi6JiGHPr61YllPi2POoe9pChTksIqaZBQVe4hzpYqfaiqdTgSIHSlEV7Re34jcD3NTMZyWJMmneGUsDMA6utRAYthZBnJI3mj6yq3D/M7En0xUrbZVnA9qqEYxqMgtAHJieVXIGbxdx7l/SRm1YVF1DEyWBM+tZdjhk7o3XVnZmI0gSzHVBNO8dfY8TxlxF1MXW1bB2aDoEn2pR1vL4FuJAzdUFlA1c56Vw/SS5NMehmKBLQT4NDaeeNooAnVtgnc86KVNsKhYEKraYEQsgAUFfiBjmMtz8xWefcVOhncoqlVJINxlgSZOIzilW1SoG3MHrGQYptzc7qVIghgQBmWOD6VnMDqIY+Mb6pnFLPg40eHdzaRUzcF0DIwi7kzThMryySf1Gaz+FCPDghX1CRmGK8wacUyqc9z5TJ3q8f4ova2oDck+YrqqTH4gvlXVOjebugA6VadJ8TEjJ3xReGZ5gaYEGSPwjBzQ+IAF5gBAztRR8Fj839qiXVVehLpnTvyyKlJ0GDB0tnOMeVRc+IeholndPX9q0n8k+Fhpa4wQutq3h2M6idiBFbXBkYiSO7EaskwYrM4T4Lv/cf6mtHs/Yf9unh2MuEOpucXw6CJa4SZ/lUhia9It6ywVGcAsNiYkVl8Iqm7xxIEi1AMCRNxZg0xcC9w5gSDjFdvzmpazqeJsOqud0PMHl51mO963IW44Xlk1p2CTwl+TOG39KzyB3RwNv3rUgeyr15u1QLhBX/AA14gn4tRdF3+da1xtN3HImsTgcdqcDHOzxM+eUrbvAd42OZoA63JE0QXCIig2QIq7AT7U4mwwt8DeKpc4jV8OBQOZqOVBQUXQABMGr2Wm6gO+Yn0NJ3Nx7U9YA7zh8D4W/20bFNTHSlL0M086dYDoKTeNXzoAKsRiuLEmprgBq2G1IKyahniB1ohAjYUERrb0oOKMwztjrQrDIbqOYOllInbGam/wDiqOHA17CpqmXYdS3FrrVnXiuJ1Eb5uMedaPD3+HtwGYFiNhkn5VjLH+I4/wD/ACb3+807wQHfNgVJ1srcuX4W2jJb5u4gsPIURlgAgQFGm2PM86ZgaLeBtQm+IetX4l5/j+EIt8Rd1BbbkSSD9mwIP61lsnaR1KY5M7CI0qIkACNq9eQD3oIBGNxXn+NwjgYEkY964vrhO2mN1wXn7O0Q0g2lM+pmqIfEuDvknlkZFEUDurWB90n1NUX41/1ftXPbzF/2Mya7asG0sB4ZOJnnSDE6jIU5JJ3gg/Ten3+Dhh/Wv+6lOIACXiBnv/3o+nZY9GeHe0WnQ24Kk7KQIwI50ZGwoPTYc5migDS2Bz5eVCWJ/wBI+lXJqJ3ujAE8l99/euqygZxz/YV1OQ9v/9k="
							alt=""
						/>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus ut ipsa, nihil
							laudantium cupiditate perspiciatis sapiente adipisci fugit molestias!
						</p>
						<span>1 minut ago</span>
					</div>
				</div>
				<div ref={endRef}></div>
			</div>
			<div className="bottom">
				<div className="icons">
					<img
						src="./more.png"
						alt=""
					/>
					<img
						src="./video.png"
						alt=""
					/>
					<img
						src="./edit.png"
						alt=""
					/>
				</div>
				<input
					type="text"
					placeholder="Type a message..."
					onChange={(event) => setText(event.target.value)}
					value={text}
				/>
				<div className="emoji">
					<img
						src="./emoji.png"
						alt=""
						onClick={() => setIsOpen((prev) => !prev)}
					/>
					<div className="picker">
						<EmojiPicker
							open={isOpen}
							onEmojiClick={handleEmoji}
						/>
					</div>
				</div>
				<button className="sendButton">Send</button>
			</div>
		</div>
	);
};

export default Chat;
