function ActivityList({ activities }) {
  return (
    <div className="activity">
      <h2>Recent Activity</h2>

      <ul>
        {activities.map((activity, index) => (
          <li key={index} className="activity-item">
            <span className="activity-date">
              {activity.date}
            </span>

            <span className="activity-text">
              {activity.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityList;