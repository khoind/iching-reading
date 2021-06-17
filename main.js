// Generate a I-ching hexagram

// Function to generate a single line
// 0: yin line
// 1: yang line
const genLine = () => Math.round(Math.random()).toString();

//  Function to generate a hexagram
const genTriagram = () => genLine() + genLine() + genLine();

// Read hexagram
const dicts = {
	trigrams: {
		'011': 'wind - obedience',
		'010': 'water - falling',
		'001': 'mountain - stillness',
		'000': 'earth - nurture',
		'111': 'heaven - creation',
		'110': 'lake - joy',
		'101': 'fire - transformation',
		'100': 'thunder - excitement',
	},
	hexagrams: {
		'111111': '01. creative',
		'000000': '02. receptive',
		'100010': '03. difficulty',
		'010001': '04. folly',
		'111010': '05. waiting',
		'010111': '06. conflict',
		'010000': '07. army',
		'000010': '08. union',
		'111011': '09. taming',
		'110111': '10. treading',
		'111000': '11. peace',
		'000111': '12. standstill',
		'101111': '13. fellowship',
		'111101': '14. possession',
		'001000': '15. modesty',
		'000100': '16. enthusiasm',
		'100110': '17. following',
		'011001': '18. decay',
		'110000': '19. Approach',
		'000011': '20. view',
		'100101': '21. biting',
		'101001': '22. grace',
		'000001': '23. splitting',
		'100000': '24. return',
		'100111': '25. innocence',
		'111001': '26. taming',
		'100001': '27. mouth',
		'011110': '28. preponderance',
		'010010': '29. abysmal',
		'101101': '30. clinging',
		'001110': '31. influence',
		'011100': '32. duration',
		'001111': '33. retreat',
		'111100': '34. power',
		'000101': '35. progress',
		'101000': '36. darkening',
		'101011': '37. family',
		'110101': '38. opposition',
		'001010': '39. obstruction',
		'010100': '40. deliverance',
		'110001': '41. decrease',
		'100011': '42. increase',
		'111110': '43 resoluteness',
		'011111': '44. coming',
		'000110': '45. gathering',
		'011000': '46. pushing',
		'010110': '47. oppression',
		'011010': '48. well',
		'101110': '49. revolution',
		'011101': '50. cauldron',
		'100100': '51. arousing',
		'001001': '52. still',
		'001011': '53. development',
		'110100': '54. marrying',
		'101100': '55. abundace',
		'001101': '56. wanderer',
		'011011': '57. gentle',
		'110110': '58. joyous',
		'010011': '59. dispersion',
		'110010': '60. limitation',
		'110011': '61. truth',
		'001100': '62. small',
		'101010': '63. after',
		'010101': '64. before',
	},
};

const read = () => {
	let triagram1 = genTriagram();
	let triagram2 = genTriagram();
	let hexagram = triagram1 + triagram2;
	let markedLine = Math.floor(Math.random() * 6);
	return `${dicts.trigrams[triagram2]} upon ${dicts.trigrams[triagram1]} => ${dicts.hexagrams[hexagram]}; marked line: ${markedLine}`;
};

console.log(read());
