import Demo from '../../assets/fincal.png';
import billTracker from '../../assets/billTracker.png';
import typeTestImg from '../../assets/typetest.png';

export const projectsData = [
    {
        show: true,
        projectName: 'Fincal',
        briefSummary:
            'A comprehensive financial calculator app, which is built with vanilla JavaScript, HTML, and CSS using the bootstrap framework. This Web app is converted into a PWA using pwabuilder.',
        githubLink: 'https://github.com/itsprathapkreddy/fincal',
        liveLink: 'https://financial-calculators-site.vercel.app/pages/home.html',
        thumbNail: Demo
    },
    {
        show: true,
        projectName: 'Typing Test',
        briefSummary:
            'The faster you type, the faster you communicate with others. With typing test, you can check your live speed i.e., Words per Min, accuracy, and get a detailed report on which words you typed wrong.',
        githubLink: 'https://github.com/itsprathapkreddy/typingtest',
        liveLink: 'https://typingtestpro.vercel.app/',
        thumbNail: typeTestImg
    },
    {
        show: true,
        projectName: 'Bill Tracker',
        briefSummary:
            'A Credit Card Bill Tracker helps users track due dates, log payments, and receive reminders to avoid late fees. It provides spending insights and monitors outstanding balances for better financial management.',
        githubLink: '#',
        liveLink: 'https://credit-card-bill-tracker.com/',
        thumbNail: billTracker
    },
    {
        show: false,
        projectName: 'Expense Manager',
        briefSummary:
            'Managing everyday expenses is the first step to mastering your financial stability. This Expense manager lets you add your everyday expenses and categorize them and sort them by price every month. It also comes with an interactive dashboard of your monthly and yearly expenses.',
        githubLink: 'https://github.com/itsprathapkreddy/ExpenseManager',
        liveLink: 'https://expensemanager-993c2.web.app/dashboard'
    }
];
