const questions = [
	{
		id: 1,
		title:
			'Which of the following retains the information it’s storing when the power to the system is turned off?',
		answers: [ 'CPU', 'ROM', 'RAM', 'DIMM' ],
		rightAnswer: 'ROM',
		marks: 2
	},
	{
		id: 2,
		title: 'A network of computers and other devices that is confined to a relatively small space is called?',
		answers: [ 'Wide Area Network', 'Local Area Network', 'Global Network', 'Peer-to-Peer Network' ],
		rightAnswer: 'Local Area Network',
		marks: 3
	},
	{
		id: 3,
		title: 'Every computer connected to the Internet is identified by a unique four-part string, known as',
		answers: [ 'IP address', 'Host name', 'Domain name', 'None of the above' ],
		rightAnswer: 'IP address',
		marks: 3
	},
	{
		id: 4,
		title: 'ENIAC was the first general-purpose electronic computer. ENIAC stands for',
		answers: [
			'Electronic Network Interactive Analytic Computer',
			'Electronic Numerical Integrator and Computer',
			'Electronic Network Integrated Analytical Computer',
			'Electronic Numerical Integrated Automatic Computer'
		],
		rightAnswer: 'Electronic Numerical Integrator and Computer',
		marks: 2
	},
	{
		id: 5,
		title: 'Which of the following statement is correct?',
		answers: [ '1 KB = 1024 bytes', '1 MB=2048 bytes', '1 MB = 1000 kilobytes', '1 KB = 1000 bytes' ],
		rightAnswer: '1 KB = 1024 bytes',
		marks: 6
	},
	{
		id: 6,
		title: 'Which of the following memories must be refreshed many times per second?',
		answers: [ 'Static RAM', 'Dynamic RAM', 'EPROM', 'ROM' ],
		rightAnswer: 'Dynamic RAM',
		marks: 4
	},
	{
		id: 7,
		title:
			' ______ is a technology that allows telephone calls to be made over computer networks like the Internet',
		answers: [ 'VoIP', 'GSM', 'Modem', 'CDMA' ],
		rightAnswer: 'VoIP',
		marks: 5
	}
];
export function getQns(){
	return questions;
}
