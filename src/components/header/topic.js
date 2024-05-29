import { useState, useEffect } from 'react';
import { listTopics } from '../unsplash-api';
import './topic.css';

const Topics = ({ sendTitle }) => {
    const [topicList, setTopicList] = useState([]);

    useEffect(() => {
        listTopics(1, 20).then((result) => {
            if (result.type === 'success') {
                const topic = result.response.results;
                setTopicList(topic);
            }
        });
    }, []);

    return (
        <div className="topic">
            <ul className="topic-list">
                {topicList ? (
                    topicList.map((topic) => (
                        <li key={topic.id} onClick={() => sendTitle(topic.title)}>
                            {topic.title}
                        </li>
                    ))
                ) : (
                    <></>
                )}
            </ul>
        </div>
    );
};

export default Topics;
