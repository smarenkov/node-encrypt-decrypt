export function parseArgs(args: string[]): Record<string, string> {
  const argMap: Record<string, string> = {};

  args.forEach((arg, index) => {
    if (arg.startsWith('-')) {
      const key = arg.slice(1);
      const value = args[index + 1];
      if (value && !value.startsWith('-')) {
        argMap[key] = value;
      }
    }
  });

  return argMap;
} 