function verify( expression = ''){
	
	const regex = /[^<>()\[\]]/g
	const str = expression.replace( regex, '')
	if(str.length%2 != 0) return 0

	const strToArray = [...str]
	const opening = [ '<' , '[', '(']  
	const closing = [ '>' , ']', ')']
	let TempArray = []

	const map = new Map()
	map.set('>','<').set( ')', '(' ).set( ']', '[')


	let valid = 1
	for ( let i = 0; i < strToArray.length; i++ ) {
		
		if(  opening.includes( strToArray[i] ) )
			TempArray.push( strToArray[i] )
		
		if(  closing.includes( strToArray[i] ) &&   ( map.get( strToArray[i])  !=  TempArray [ TempArray.length - 1] )  ){
			valid = 0
			break
		}

		if(  closing.includes( strToArray[i] ) &&   ( map.get( strToArray[i])  ==  TempArray [ TempArray.length - 1] )  ){
			TempArray.pop()
		}

	}//end for

	if( TempArray.length > 0) valid = 0
	return valid

}
