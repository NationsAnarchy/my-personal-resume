const themes = ["garden", "forest"];

const ThemeSelect = () => {
  return (
    <select
      title="Select theme"
      data-choose-theme
      className="select select-bordered"
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
