import React from 'react'
import useTheme from '../context/theme'

function ThemeBtn() {
  const { themeMode, lightMode, darkMode } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkMode();
    } else {
      lightMode();
    }
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={themeMode === "dark"}
            onChange={onChangeBtn}
            className="sr-only peer"
          />
          {/* background track */}
          <div className="block h-8 w-14 rounded-full bg-gray-300 peer-checked:bg-gray-700 transition-colors"></div>
          {/* toggle dot */}
          <div className="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:translate-x-6"></div>
        </div>
      </label>
    </>
  );
}

export default ThemeBtn;
