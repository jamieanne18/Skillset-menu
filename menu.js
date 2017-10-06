var x = prompt("Please enter the day today")
theDay = x.toUpperCase()

switch(theDay)
{
	case "MONDAY":
		document.write("Adobo")
		break
	case "TUESDAY":
		document.write("Chicken Curry")
		break
	case "WEDNESDAY":
		document.write("Tinola")
		break
	case "THURSDAY":
		document.write("Sinigang na Baboy")
		break
	case "FRIDAY":
		document.write("Munggo")
		break
	case "SATURDAY":
		document.write("Kare-kareng baka")
		break
	case "SUNDAY":
		document.write("Chopseuy")
		break
	default:
		document.write("Invalid Input!")
}