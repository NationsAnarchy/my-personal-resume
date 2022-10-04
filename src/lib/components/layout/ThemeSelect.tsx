const themes = ["autumn", "forest"];

const ThemeSelect = () => {
  return (
    <select
      title="Select theme"
      data-choose-theme
      className="select select-bordered border-primary text-lg font-medium"
    >
      {themes.map((theme) => (
        <option value={theme} key={theme}>
          {theme}
        </option>
      ))}
    </select>
  );
};

export default ThemeSelect;
