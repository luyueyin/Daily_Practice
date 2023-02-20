import styled from 'styled-components'

export const Heading = styled.h1 `
	font-family: Arial, Helvetica, sans-serif;
	font-size: 2em;
	margin: 50px 0;
`

export const ProjectHeading = styled(Heading) `
	font-size: 1em;
	margin: 0;
`

export const Card = styled.div `
	font-family: Arial, Helvetica, sans-serif;
	font-size: 18px;
	padding: 10px;
	margin: 10px;
`

export const Row = styled.div `
	font-family: Arial, Helvetica, sans-serif;
	display: flex;
	margin: .5em 1em;
	width: 350px;
	justify-content: space-between;
`
export const RightRow = styled(Row) `
	justify-content: flex-end;
`

export const Button = styled.button `
	padding: 5px;
	background-color: aqua;
	margin: 5px;
`
export const TextField = styled.input `
	padding: 5px;
	margin-left: 25px;
	height: 13px;
`