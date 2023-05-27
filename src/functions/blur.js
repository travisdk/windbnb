// only if clicked outside entire component do focusout/blur
const handleBlur = (e, action) => {
  const currentTarget = e.currentTarget;
  setTimeout(() => {
    if (!currentTarget.contains(document.activeElement)) {
      action();
    }
  }, 0);
};
export default handleBlur;
