export const useDropdownPosition = (ref) => {
    const getDropdownPosition = () => {
        if (!ref.current) return { top: 0, left: 0 };

        const rect = ref.current;
        const dropdownWidth = 240;

        let left = rect.left + window.scrollX;
        let top = rect.bottom + window.scrollY;

        if (left + dropdownWidth > window.innerWidth) {
            left = rect.right + window.scrollX - dropdownWidth
        }

        if(left < 0) {
            left = window.innerHTML - dropdownWidth - 16;
      }

        if(left < 0) {
            left = 16; // minimum margin
        }

        return {top, left}

    }

    return { getDropdownPosition };
}