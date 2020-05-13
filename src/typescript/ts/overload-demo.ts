function overload(a: number): string;
function overload(a: string): string;
function overload(a: number, b: string): string;
function overload(a: any): string {
    return `overload1 test: ${a}`
}


overload(1, 'a')