import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
	const [selectedTopic, setSelectedTopic] = useState('')

	const topics = [
		{ slug: 'Aptitude', title: 'Aptitude', icon: '🧮', description: 'Algebra, geometry, arithmetic and more.' },
		{ slug: 'Technical', title: 'Technical', icon: '⚙️', description: 'Physics, chemistry, biology basics.' },
		{ slug: 'Behavioural', title: 'Behavioural', icon: '🤝', description: 'World events, eras and leaders.' },
		{ slug: 'Puzzles', title: 'Puzzles', icon: '🧩', description: 'Countries, capitals and maps.' },
		{ slug: 'coding', title: 'Coding', icon: '🧑‍💻', description: 'Programming concepts and logic.' },
		{ slug: 'Verbal', title: 'Verbal', icon: '🗣️', description: 'Rules, records and athletes.' },
	]

	const selectedTopicObj = topics.find(t => t.slug === selectedTopic)

	const handleStartQuiz = () => {
		if (!selectedTopicObj) return
		console.log('Starting quiz for topic:', selectedTopicObj.slug)
	}

	return (
		<>
			<Navbar />
			<main className="page">
				<section className="topic-hero" aria-labelledby="topic-heading">
					<h2 id="topic-heading" className="topic-heading">Choose your topic</h2>
					<p className="topic-subtitle">Pick a category to get tailored questions. You can change this anytime.</p>
				</section>

				<section className="topic-grid" role="list" aria-label="Available topics">
					{topics.map((topic) => (
						<button
							key={topic.slug}
							type="button"
							role="listitem"
							className={`topic-card${selectedTopic === topic.slug ? ' selected' : ''}`}
							onClick={() => setSelectedTopic(topic.slug)}
							aria-pressed={selectedTopic === topic.slug}
							aria-label={`Select ${topic.title}`}
						>
							<span className="topic-icon" aria-hidden="true">{topic.icon}</span>
							<span className="topic-content">
								<span className="topic-title-text">{topic.title}</span>
								<span className="topic-description">{topic.description}</span>
							</span>
							{selectedTopic === topic.slug && <span className="selected-badge" aria-hidden="true">✓</span>}
						</button>
					))}
				</section>

				{selectedTopicObj && (
					<div className="start-bar" role="region" aria-label="Start quiz">
						<div className="start-bar-content">
							<div className="start-bar-info">
								<span className="start-bar-label">Selected:</span>
								<span className="start-bar-topic">
									<span className="start-bar-icon" aria-hidden="true">{selectedTopicObj.icon}</span>
									{selectedTopicObj.title}
								</span>
							</div>
							<button type="button" className="start-quiz-button" onClick={handleStartQuiz}>
								Start Quiz
							</button>
						</div>
					</div>
				)}
			</main>
		</>
	)
}

export default App
