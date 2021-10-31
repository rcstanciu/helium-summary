module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination:
          "/hotspot/11bS6EEkPKvwFUg2ja3VisVr5cT4ZrBjxzWJydxvdEceQpvjXVm",
        permanent: false,
      },
    ];
  },
};
