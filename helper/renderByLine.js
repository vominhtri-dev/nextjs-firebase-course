export default function renderByLine(str, end, defaultTextMore = ' ...') {
    const formatStr = str + ''
    if (formatStr.length <= end) return formatStr
    return formatStr.slice(0, end) + defaultTextMore
}
