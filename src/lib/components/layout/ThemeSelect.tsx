const themes = ["lemonade", "forest"];

const ThemeSelect = () => {
  return (
    <select
      title="Select theme"
      data-choose-theme
      className="select select-bordered select-xs border-primary text-sm font-medium"
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
