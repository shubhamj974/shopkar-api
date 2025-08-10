export class ApiResponse {
  static success(message: string, data?: any) {
    return {
      status: true,
      message,
      data: data ?? null,
    };
  }

  static error(message: string, errors?: any) {
    return {
      status: false,
      message,
      errors: errors ?? null,
    };
  }
}
