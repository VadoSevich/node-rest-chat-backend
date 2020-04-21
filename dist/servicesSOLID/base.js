"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Base {
  constructor(args) {
    if (!args.context) throw new Error("CONTEXT_REQUIRED");
    this.context = args.context;
  }

  run(params) {
    return this.validate(params).then(cleanParams => {
      return this.execute(cleanParams);
    });
  }

}

exports.default = Base;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlc1NPTElEL2Jhc2UuanMiXSwibmFtZXMiOlsiQmFzZSIsImNvbnN0cnVjdG9yIiwiYXJncyIsImNvbnRleHQiLCJFcnJvciIsInJ1biIsInBhcmFtcyIsInZhbGlkYXRlIiwidGhlbiIsImNsZWFuUGFyYW1zIiwiZXhlY3V0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLE1BQU1BLElBQU4sQ0FBVztBQUN4QkMsRUFBQUEsV0FBVyxDQUFDQyxJQUFELEVBQU87QUFDaEIsUUFBSSxDQUFDQSxJQUFJLENBQUNDLE9BQVYsRUFBbUIsTUFBTSxJQUFJQyxLQUFKLENBQVUsa0JBQVYsQ0FBTjtBQUNuQixTQUFLRCxPQUFMLEdBQWVELElBQUksQ0FBQ0MsT0FBcEI7QUFDRDs7QUFFREUsRUFBQUEsR0FBRyxDQUFDQyxNQUFELEVBQVM7QUFDVixXQUFPLEtBQUtDLFFBQUwsQ0FBY0QsTUFBZCxFQUFzQkUsSUFBdEIsQ0FBMkJDLFdBQVcsSUFBSTtBQUMvQyxhQUFPLEtBQUtDLE9BQUwsQ0FBYUQsV0FBYixDQUFQO0FBQ0QsS0FGTSxDQUFQO0FBR0Q7O0FBVnVCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKGFyZ3MpIHtcbiAgICBpZiAoIWFyZ3MuY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ09OVEVYVF9SRVFVSVJFRFwiKTtcbiAgICB0aGlzLmNvbnRleHQgPSBhcmdzLmNvbnRleHQ7XG4gIH1cblxuICBydW4ocGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGUocGFyYW1zKS50aGVuKGNsZWFuUGFyYW1zID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoY2xlYW5QYXJhbXMpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=