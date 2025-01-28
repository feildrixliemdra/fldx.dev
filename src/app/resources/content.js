import { InlineCode, LetterFx } from '@/once-ui/components'

const person = {
  firstName: 'Feildrix',
  lastName: 'Liemdra',
  get name() {
    return `${this.firstName} ${this.lastName}`
  },
  role: 'Software Engineer',
  avatar: '/images/avatar_fldx.jpg',
  location: 'Asia/Jakarta', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English', 'Bahasa'], // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
}

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/feildrixliemdra',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/feildrix-liemdra/',
  },
  {
    name: 'Medium',
    icon: 'medium',
    link: 'https://medium.com/@feildrixliemdra',
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:feildrixliemdra@gmail.com',
  },
]

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      <p>Software Engineer</p>
      <LetterFx
        speed='slow'
        trigger='instant'
        charset={['X', 'a', 'H', 'z', 'o', '0', 'y', '*', '0', '1']}
        className='font-xs neutral-on-background-weak font-default'
      >
        based in Indonesia 🇮🇩
      </LetterFx>
    </>
  ),
  subline: (
    <>
      I'm Feildrix, a <InlineCode>Software Engineer</InlineCode> with a passion
      for building scalable, user-focused applications and sipping on great
      coffee. Skilled in front-end and back-end technologies, I blend clean code
      with creativity to deliver innovative solutions.
      <br /> one line of code—and one cup of coffee—at a time.
    </>
  ),
}

const about = {
  label: 'About Me',
  title: 'About me',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Feildrix is a skilled full-stack software engineer with a passion for
        building robust, scalable, and innovative applications. With expertise
        spanning both front-end and back-end technologies, Feildrix seamlessly
        bridges the gap between design and functionality. Whether crafting
        intuitive user interfaces or architecting efficient server-side
        solutions, Feildrix consistently delivers high-quality work that meets
        both user and business needs. Known for a collaborative mindset and a
        knack for problem-solving, Feildrix thrives in dynamic environments
        where creativity and technology converge.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'eFishery',
        timeframe: '2022 - Present',
        role: 'Software Engineer (Backend)',
        achievements: [
          <>
            Fund Submission Team: Responsible to process and validate Efishery
            Kabayan (Loan) submission data from farmer
            <ul>
              <li>Migrate old database from CouchDB to Postgre</li>
              <li>
                Create new service that consume core customer data changes from
                other service with Rabbitmq
              </li>
              <li>Process and validate farmer submission for loan</li>
              <li>
                Integrate with OCR service to ensure farmer's uploaded KTP and
                KK are valid document
              </li>
              <li>
                Collaborate with Product Manager to develop and maintain
                existing or new feature related to Kabayan submission
              </li>
            </ul>
          </>,
          <>
            Tech Stack:
            <ul>
              <li>Golang</li>
              <li>PostgreSQL</li>
              <li>CouchDB</li>
              <li>Redis</li>
              <li>RabbitMQ</li>
              <li>Grafana</li>
            </ul>
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: '/images/projects/project-01/cover-01.jpg',
          //   alt: 'Once UI Project',
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: 'Ralali',
        timeframe: '2019 - 2022',
        role: 'Software Engineer (Backend)',
        achievements: [
          <>
            Fintech(Digital Goods) Team: Improve legacy service by building new
            Digital Goods Aggregator Project based on Aggregator Pattern and
            Event Driven Architecture.
            <ul>
              <li>Create technical documentation for new service</li>
              <li>
                Contribute to designing system architecture Develop Digital
                Product service that focus on product management
              </li>
              <li>
                Develop Digital Aggregator service Develop Bulk Digital service
                Integrate Ralali marketplace with new digital goods services
              </li>
            </ul>
          </>,
          <>
            BIG Agent Team: Focus on developing backend feature for BIG Agent
            Mobile Apps and Admin Dashboard.
            <ul>
              <li>
                Responsible for reliability and performance of API services
              </li>
              <li>Develop and fixing bug in agent core API legacy</li>
              <li>
                Develop Learning in app feature service that focus on learning
                system
              </li>
              <li>
                Develop Questionnaire service that focus on manage questionnaire
                feature
              </li>
              <li>
                Develop Query service that focus on improving response time for
                GET request
              </li>
              <li>Integrate new Digital Goods Service</li>
            </ul>
          </>,
          <>
            Tech Stack:
            <ul>
              <li>Golang</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
              <li>Kafka</li>
              <li>Datadog</li>
              <li>ElasticSearch</li>
            </ul>
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'Binus University (2016-2020)',
        description: <>Bachelor of Computer Science</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Golang',
        description: (
          <>
            Focus on building high-performance, scalable, and secure server-side
            systems, from crafting RESTful APIs to optimizing microservices.
            With a strong problem-solving mindset, I’m passionate about
            delivering reliable solutions that drive seamless application
            performance.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: '/images/projects/project-01/cover-02.jpg',
          //   alt: 'Project image',
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: 'NodeJS',
        description: (
          <>
            Proficient in NodeJS with experience in NestJS to develop robust
            server-side application.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: 'React & NextJS',
        description: (
          <>
            focus on building dynamic, responsive, and high-performance web
            applications. With a strong eye for detail and user experience, I’m
            passionate about creating seamless interfaces and delivering modern,
            scalable solutions.
          </>
        ),
      },
      {
        title: 'SQL and NoSQL Database',
        description: (
          <>
            Experience with SQL and NoSQL database to build application that
            cover user needs. I've been working with MySQL and PosgreSQL for SQL
            database and MongoDB, Redis for NoSQL database.{' '}
          </>
        ),
      },
      {
        title: 'Docker',
        description: (
          <>
            Experienced in Docker, specializing in containerizing applications
            for streamlined development, deployment, and scalability. I focus on
            creating efficient, portable environments, optimizing workflows, and
            ensuring seamless integration across various systems.
          </>
        ),
      },
      {
        title: 'Git',
        description: <>Git for version control. </>,
      },
      {
        title: 'Message Queueing',
        description: (
          <>
            Experienced with Kafka and RabbitMQ for message queueing to build
            event driven architecture.
          </>
        ),
      },
    ],
  },
}

const blog = {
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
}

const work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
}

const gallery = {
  label: 'Gallery',
  title: 'My photo gallery',
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: '/images/gallery/img-01.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-02.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-03.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-04.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-05.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-06.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-07.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-08.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-09.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-10.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-11.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-12.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-13.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-14.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
  ],
}

export { person, social, newsletter, home, about, blog, work, gallery }
