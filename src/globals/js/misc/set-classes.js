export default function setClasses(prefix, oldClasses, newClasses) {
  const oldArray = oldClasses.split(' ').filter(classname => !classname.startsWith(`${prefix}--`));
  const newArray = newClasses.split(' ');

  return oldArray.concat(...newArray).join(' ');
}
