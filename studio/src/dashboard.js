export default {
  widgets: [
    {
      name: "project-info"
    },
    {
      name: "project-users"
    },
    {
      name: "google-analytics",
      layout: {
        width: "large"
      },
      options: {
        title: "Last 30 days",
        gaConfig: {
          reportType: "ga",
          query: {
            dimensions: "ga:date",
            metrics: "ga:users, ga:sessions, ga:newUsers",
            "start-date": "30daysAgo",
            "end-date": "yesterday"
          },
          chart: {
            type: "LINE",
            options: {
              width: "100%"
            }
          }
        }
      }
    }
  ]
};
