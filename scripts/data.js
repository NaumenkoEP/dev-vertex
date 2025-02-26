
// object with the product's full description 
const productsFull = [
    {
        name: "Basic",
        description: `The Basic plan is perfect for individuals, freelancers, 
        and small businesses looking to create a simple, professional 
        online presence. It is ideal for showcasing essential information 
        like services, contact details, and company background, making 
        it a great choice for portfolios, small business sites, 
        or informational pages.`,
        price: "From €150.00",
        details: ` ✔ Responsive design of your choice <br>
                ✔ 1-3 pages / sections of content <br>
                ✔ Mobile-friendly & optimized for all devices <br>
                ✔ Basic contact form for inquiries <br>
                ✔ Social media links integration <br>
                ✔ Fast-loading & SEO-friendly structure <br>
                ✔ Simple, clean, and modern design <br>
                ✔ Basic image and text content placement <br>
                ✔ Google Maps integration (if needed) <br>
                ✔ Free minor revisions after delivery <br>
                <br>
                ⏱ 12-36 hour delivery time `,
        id: "Basic"
    },
    {
        name: "Standard",
        description: `A fully interactive, multi-page website with custom functionalities 
        will feature dynamic, engaging elements like animations, interactive forms, 
        and tailored user experiences. It includes multiple pages to showcase your
        content effectively, with a responsive design that ensures smooth navigation 
        across all devices.`,
        price: "From €400",
        details: ` ✔ All features of <b>Basic</b> <br>
                ✔ 3-5 pages / sections of content <br>
                ✔ Custom animations and effects <br>
                ✔ Interactive elements for engagement <br>
                ✔ User-friendly navigation structure <br>
                ✔ Optimized for fast performance <br>
                ✔ Custom user experience features <br>
                ✔ Basic image and text content placement <br>
                ✔ Cross-browser compatibility <br>
                ✔ Easily scalable and flexible <br>
                <br>
                ⏱ 5-7 day delivery time `,
        id: "Standard"
    },
    {
        name: "Premium",
        description: `A professional fully customized, scalable, full-stack website with a robust
        backend and custom design. This package includes all the features of the Standard 
        plan, plus advanced backend integration and custom database functionality. 
        The website will be optimized for search engines to improve visibility and 
        performance.`,
        price: "From €800.00",
        details: `✔ All features of <b>Standard</b> <br>
                ✔ Up to 10 pages of content <br>
                ✔ Custom database and backend integration <br>
                ✔ Advanced SEO optimization <br>
                ✔ Admin panel for easy content management <br>
                ✔ Secure user authentication systems <br>
                ✔ Custom data processing, display features <br>
                ✔ Performance optimization for high traffic <br>
                ✔ Scalable infrastructure for future growth <br>
                ✔ Cross-platform integration capabilities <br>
                <br>
                ⏱ 7-14 day delivery time`,

        id: "Premium"
    },
    {
        name: "Maintenance",
        description: `Our comprehensive maintenance service ensures your website runs smoothly 
        with ongoing front-end and back-end support. We handle all technical aspects, including 
        content updates, debugging, and code optimization. Our team is available 24/7 to address 
        any issues, providing peace of mind and continuous improvements to keep your website 
        performing at its best.`,
        price: "From €100.00",
        details: `✔ 24/7 client support for immediate assistance <br>
                ✔ Regular content updates and modifications <br>
                ✔ Code cleaning and debugging <br>
                ✔ Minor changes, upon request <br>
                ✔ Backup and restore services  <br>
                ✔ Performance monitoring and speed optimization <br>
                ✔ Compatibility testing across browsers <br>
                ✔ Analytics integration and reporting <br>
                ✔ Monthly reports on site performance and updates <br>`,

        id: "Maintenance"
    },
    {
        name: "E-Commerce",
        description: `This comprehensive e-commerce solution provides a powerful online store designed f
        or seamless transactions and smooth product management. It includes fully integrated payment 
        gateways, product catalog management, and order tracking features. We provide a fully customizable online 
        store tailored to your brand, with all essential e-commerce functionalities for smooth business 
        operations.`,
        price: "From €1200.00",
        details: `✔ Full e-commerce functionality <br>
                 ✔ Secure payment gateway integration  <br>
                 ✔ Product and order management dashboard <br>
                 ✔ SEO and performance optimization <br>
                 ✔ Responsive design for smooth shopping <br>
                 ✔ Inventory management and stock tracking <br>
                 ✔ Customer accounts management <br>
                 ✔ Advanced analytics and reporting for business insights <br>
                <br>
                ⏱ 14-30 day delivery time`,
        id: "ECommerce"
    },
    {
        name: "Booking System",
        description: `This booking system is designed for hotels, resorts, and service-based businesses 
        to automate and manage appointments or room reservations. With seamless calendar integration and 
        automated booking confirmations, it ensures efficient operations and a smooth customer experience. 
        Ideal for managing multiple rooms, staff schedules, or appointments.`,
        price: "From €1200.00",
        details: `✔ Scheduling with calendar integration <br>
                ✔ Automated booking confirmations <br>
                ✔ Includes a custom website <br>
                ✔ Secure online payments integration  <br>
                ✔ Fully responsive booking system  <br>
                ✔ Customizable booking forms <br>
                ✔ Admin dashboard for managing bookings  <br>
                ✔ Multiple room/service management <br>
                ✔ SMS and email reminders for customers <br>
                ✔ 24/7 customer support for smooth operation <br>
                <br>
                ⏱ 14-30 day delivery time`,
        id: "BookingSystem"
    },
    {
        name: "AI-Powered Site",
        description: `This AI-powered website integrates advanced features that enhance user 
        personalization and automate various aspects of site interaction. Using AI technologies 
        like chatbots, automated content suggestions, and machine learning, your site will 
        offer an intelligent, customized experience for users, improving engagement, 
        increasing conversions, and optimizing user journeys.`,
        price: "From €1500.00",
        details: `✔ AI chatbot integration for real-time customer support <br>
                 ✔ Automated content suggestions <br>
                 ✔ Machine learning-based UX design <br>
                 ✔ Smart search capabilities <br>
                 ✔ Adaptive content that evolves <br>
                 ✔ Data-driven insights <br>
                 ✔ Custom AI algorithms tailored to your needs <br>
                 ✔ Dynamic content updating <br>
                 ✔ Voice-enabled search (optional) <br>
                 <br>
                ⏱ 1-2 month delivery time`,
        id: "AIPoweredSite"
    },
    {
        name: "Custom App",
        description: `Bring your unique web application idea to life with a fully custom-built solution. 
        From designing personalized features to creating an intuitive user experience, we will work closely 
        with you to develop an application that meets your specific needs. Fully responsive, this solution
        is built to grow with your business.`,
        price: "From €300",
        details: `✔ Fully custom application <br>
                 ✔ Any feature of your choice <br>
                 ✔ Custom, responsive UX design  <br>
                 ✔ Scalable infrastructure <br>
                 ✔ Real-time data processing and management <br>
                 ✔ Secure user authentication <br>
                 ✔ Cross-device, browser compatibility <br>
                 ✔ Ongoing support and maintenance after launch <br>
                 <br>
                Price and Delivery time will be estimated after the App idea is discussed<br>`
        ,
        id: "CustomApplication"
    }
]


// products' data for home page
const products = [
    {
        name: "Basic",
        description: "A clean and professional website designed for informational purposes",
        price: "From €150.00",
        details: [
            "✔ Responsive design of your choice",
            "✔ 1-3 pages / sections of content",
            "✔ 12-36 hour delivery time",
            "✔ All parameters are fully negotiable"
        ],
    },
    {
        name: "Standard",
        description: "A fully interactive, multi-page website, featuring custom functionalities",
        price: "From €400.00",
        details: [
            "✔ Responsive design of your choice",
            "✔ Custom interactivity and animations",
            "✔ 3-7 day delivery time",
            "✔ All parameters are fully negotiable"
        ],
    },
    {
        name: "Premium",
        description: "A professional full-stack website with a robust backend and custom design",
        price: "From €800.00",
        details: [
            "✔ All features of Standard",
            "✔ Database, backend integration",
            "✔ 7-14 day delivery time",
            "✔ SEO optimization"
        ],
    },
    {
        name: "Maintenance",
        description: "We will maintain your website, taking care of all front-end and back-end aspects",
        price: "From €100.00 / Month",
        details: [
            "✔ 24/7 client support",
            "✔ Content upload or change",
            "✔ Code cleaning, debugging",
            "✔ Minor changes if requested"
        ],
    }
];

const specializedProducts = [
    {
        name: "E-Commerce",
        description: "A powerful online store with payment gateways and product management",
        price: "From €1200.00",
        details: [
            "✔ Full e-commerce solution",
            "✔ Payment integration",
            "✔ Product & order management",
            "✔ SEO & performance optimization"
        ],
    },
    {
        name: "Booking System",
        description: "Automate and manage appointments with a seamless online booking system",
        price: "From €1200.00",
        details: [
            "✔ Scheduling with calendar integration",
            "✔ Automated booking confirmations",
            "✔ Secure online payments (optional)",
            "✔ Completed hotel website"
        ],
    },
    {
        name: "AI-Powered Site",
        description: "Integrate AI-driven features for automation and user personalization",
        price: "From €1500.00",
        details: [
            "✔ AI chatbot integration",
            "✔ Automated content suggestions",
            "✔ Machine learning-based UX",
            "✔ Smart search capabilities"
        ],
    },
    {
        name: "Custom Application",
        description: "Describe to us your Web-Application idea and we will bring it to life!",
        price: "From €300",
        details: [
            "✔ Fully custom application",
            "✔ Any feature of your choice",
            "✔ Custom, responsive UX design",
            "✔ Scalable & cloud-hosted"
        ],
    }
];